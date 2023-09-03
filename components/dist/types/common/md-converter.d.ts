export declare function mdToGroupedHtml(md: string): Schedule;
export type Schedule = {
    title: string;
    weekList: HTMLElement;
    assignemnts?: HTMLElement[];
};
