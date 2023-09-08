import { LitElement, TemplateResult } from "lit";
export declare class SchedulePreviewComponent extends LitElement {
    week: number | null;
    scheduleName: string;
    private preview;
    connectedCallback(): void;
    attributeChangedCallback(name: string, _old: string | null, value: string | null): void;
    updatePreview(): Promise<void>;
    static styles: import("lit").CSSResult;
    render(): TemplateResult;
}
