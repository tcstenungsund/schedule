import { LitElement, TemplateResult } from "lit";
import { Schedule as Schedule } from "../common/md-converter";
export declare class ActiveAssignmentsComponent extends LitElement {
    courses: string[];
    week: string | null;
    schedules: {
        [name: string]: Schedule;
    };
    attributeChangedCallback(name: string, _old: string | null, value: string | null): void;
    updateSchedulesAndAssignments(): Promise<void>;
    static styles: import("lit").CSSResult;
    render(): TemplateResult;
}
