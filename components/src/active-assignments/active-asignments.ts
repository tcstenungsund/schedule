import { LitElement, TemplateResult, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { getStylesFromDom } from "../common/styles";
import { fetchSchedules } from "../common/schedule-api";
import {
  Schedule as Schedule,
  mdToGroupedHtmlSchedule,
} from "../common/md-converter";

@customElement("active-assignments-component")
export class ActiveAssignmentsComponent extends LitElement {
  @property({ type: Array })
  courses: string[] = [];

  @property({ type: String })
  week: string | null = null;

  @property({ type: Object })
  schedules: { [name: string]: Schedule } = {};

  attributeChangedCallback(
    name: string,
    _old: string | null,
    value: string | null
  ): void {
    super.attributeChangedCallback(name, _old, value);

    if (_old != value) {
      this.updateSchedulesAndAssignments();
    }
  }

  async updateSchedulesAndAssignments(): Promise<void> {
    this.schedules = {};

    if (!this.courses.length) return;

    const mdDict = await fetchSchedules(this.courses);
    for (const key of Object.keys(mdDict)) {
      this.schedules[key] = mdToGroupedHtmlSchedule(mdDict[key]);
      this.schedules[key].assignemnts = getAssignmentsActiveFromScheduleForWeek(
        this.schedules[key],
        this.week ?? ""
      );
    }
    this.requestUpdate();
  }

  static styles = css`
    ${getStylesFromDom()}

    ul {
      list-style: none;
      padding: 0;
    }

    [data-assignment] {
      background-color: var(--assignment-background-color);
      padding: 0.25rem 0.5rem;
      border-radius: var(--assignment-border-radius);
      color: var(--assignment-text-color);
      transition: var(--hover-transition);

      &:hover {
        background-color: var(--assignment-hover-background-color);
        color: var(--assignment-hover-text-color);
        transition: var(--hover-transition);
      }
    }
  `;

  render(): TemplateResult {
    for (const key of Object.keys(this.schedules)) {
      const schedule = this.schedules[key];
      if (schedule.assignemnts?.length) {
        return html`<div>
          <h3>${schedule.title}</h3>
          <ul>
            ${schedule.assignemnts.map(
              (assignment) =>
                html`<li>
                  <span
                    >v.${assignment.getAttribute("data-assignment-week")}</span
                  >
                  ${assignment}
                </li>`
            )}
          </ul>
        </div>`;
      }
    }

    return html``;
  }
}

function getAssignmentsActiveFromScheduleForWeek(
  schedule: Schedule,
  week: string
) {
  // Remove weeks after the current week
  // We only want assignments from the current week and older
  const currentWeeks = schedule.weekList.cloneNode(true) as HTMLElement;
  currentWeeks.querySelectorAll(`[data-week="${week}"] ~ *`).forEach((week) => {
    week.remove();
  });

  const assignments: HTMLAnchorElement[] = [];
  currentWeeks
    .querySelectorAll("a[data-assignment]")
    .forEach((assignment: Element) => {
      assignments.push(assignment as HTMLAnchorElement);
    });

  // Remove duplicates
  return assignments.filter(
    (assignment, index, self) =>
      index ===
      self.findIndex(
        (e) =>
          e.innerHTML === assignment.innerHTML && e.href === assignment.href
      )
  );
}
