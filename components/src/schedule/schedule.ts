import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { getStylesFromDom } from "../common/styles";
import { getSchedule } from "../common/schedule-api";
import { Schedule } from "../common/md-converter";

@customElement("schedule-component")
export class ScheduleComponent extends LitElement {
  @property({ type: Number })
  public week: number | null = null;

  @property({ type: String })
  public scheduleName = "";

  private schedule: Schedule | null = null;

  connectedCallback(): void {
    super.connectedCallback();
    this.updateSchedule();
  }

  attributeChangedCallback(
    name: string,
    _old: string | null,
    value: string | null
  ): void {
    super.attributeChangedCallback(name, _old, value);
    this.updateSchedule();
  }

  async updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);

    if (!this.week) return;
    setTimeout(() => {
      this.shadowRoot?.getElementById(`week-${this.week}`)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }, 500);
  }

  async updateSchedule() {
    if (!this.scheduleName) return;
    this.schedule = await getSchedule(this.scheduleName);
    this.requestUpdate();
  }

  static styles = css`
    ${getStylesFromDom()}

    img {
      max-width: 100%;
    }

    .schedule > ul {
      list-style: none;
      padding: 0;
    }

    .schedule > ul > li {
      margin-block: 4rem;

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  `;

  protected render() {
    return html`<section class="schedule">
      <h1>${this.schedule?.title}</h1>
      ${this.schedule?.weekList}
    </section>`;
  }
}
