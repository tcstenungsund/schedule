import { LitElement, TemplateResult, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { getWeekPreview } from "../common/schedule";
import { getStylesFromDom } from "../common/styles";

@customElement("schedule-preview-component")
export class SchedulePreviewComponent extends LitElement {
  @property({ type: Number })
  public week: number | null = null;

  @property({ type: String })
  public scheduleName = "";

  @property({ type: Object })
  private preview: HTMLElement | null = null;

  connectedCallback(): void {
    super.connectedCallback();
    this.updatePreview();
  }

  attributeChangedCallback(
    name: string,
    _old: string | null,
    value: string | null
  ): void {
    super.attributeChangedCallback(name, _old, value);

    if (_old != value) {
      this.updatePreview();
    }
  }

  async updatePreview() {
    if (!this.week || !this.scheduleName) return;
    this.preview = await getWeekPreview(this.week, this.scheduleName);
  }

  static styles = css`
    ${getStylesFromDom()}

    a.schedule-preview {
      text-decoration: none;
      color: inherit;
      display: block;
      padding: min(1rem, 2vw);
      transition: var(--hover-transition);

      &:hover {
        background-color: var(--hover-background-color);
        border-radius: var(--hover-border-radius);
        transition: var(--hover-transition);
      }

      & div > *:first-child {
        margin-top: 0;
        padding-top: 0;
      }

      & div > *:last-child {
        margin-bottom: 0;
        padding-bottom: 0;
      }

      & [data-assignment] {
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
    }
  `;

  render(): TemplateResult {
    return html`<a
      class="schedule-preview"
      href="http://localhost:5500/schedule.html?course=${this.scheduleName}"
    >
      ${this.preview ?? ""}
    </a>`;
  }
}
