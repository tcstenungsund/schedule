import { LitElement } from "lit";
export declare class AssignmentComponent extends LitElement {
    link: string;
    private assignment;
    connectedCallback(): void;
    attributeChangedCallback(name: string, _old: string | null, value: string | null): void;
    private updateAssignment;
    static styles: import("lit").CSSResult;
    protected render(): import("lit-html").TemplateResult<1>;
}
