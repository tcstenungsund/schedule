import { LitElement } from "lit";
export declare class ScheduleComponent extends LitElement {
    week: number | null;
    scheduleName: string;
    private schedule;
    connectedCallback(): void;
    attributeChangedCallback(name: string, _old: string | null, value: string | null): void;
    updated(changedProperties: Map<string, any>): void;
    updateSchedule(): Promise<void>;
    static styles: import("lit").CSSResult;
    protected render(): import("lit-html").TemplateResult<1>;
}
