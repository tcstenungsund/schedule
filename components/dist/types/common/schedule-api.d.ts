import { Schedule } from "./md-converter";
export declare function fetchSchedules(schedules: string[]): Promise<{
    [name: string]: string;
}>;
export declare function fetchSchedule(scheduleName: string): Promise<string>;
export declare function getWeekPreview(week: number, scheduleName: string): Promise<HTMLElement | null>;
export declare function getSchedule(scheduleName: string): Promise<Schedule | null>;
export type CachedSchedule = {
    dateTime: Date;
    schedule: string;
};
