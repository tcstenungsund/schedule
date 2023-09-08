import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { fetchAssignment } from "../common/assignment-api";
import { mdToAssignment } from "../common/md-converter";
import { getStylesFromDom } from "../common/styles";

@customElement("assignment-component")
export class AssignmentComponent extends LitElement {
  @property({ type: String })
  public link = "";

  private assignment: HTMLElement | null = null;

  connectedCallback(): void {
    super.connectedCallback();
    this.updateAssignment();
  }

  attributeChangedCallback(
    name: string,
    _old: string | null,
    value: string | null
  ): void {
    super.attributeChangedCallback(name, _old, value);
    console.log("Attribute changed", name, _old, value);
    if (_old != value) {
      this.updateAssignment();
    }
  }

  private async updateAssignment() {
    if (!this.link) return;
    const assignmentMd = await fetchAssignment(this.link);
    if (!assignmentMd) this.assignment = null;
    this.assignment = mdToAssignment(assignmentMd);
    this.requestUpdate();
  }

  static styles = css`
    ${getStylesFromDom()}

    img {
      max-width: 100%;
    }
  `;

  protected render() {
    return html`${this.assignment}`;
  }
}
