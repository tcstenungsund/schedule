export declare function mdToGroupedHtmlSchedule(md: string): Schedule;
export declare function mdToAssignment(md: string): HTMLElement;
export type Schedule = {
    title: string;
    weekList: HTMLElement;
    assignemnts?: HTMLElement[];
};
