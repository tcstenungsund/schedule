import { Schedule, mdToGroupedHtmlSchedule } from "./md-converter";

export async function fetchSchedules(
  schedules: string[]
): Promise<{ [name: string]: string }> {
  const result: { [name: string]: string } = {};

  for (const schedule of schedules) {
    result[schedule] = await fetchSchedule(schedule);
  }

  return result;
}

export async function fetchSchedule(scheduleName: string): Promise<string> {
  if (!scheduleName) return "";

  const cachedSchedule = getCahcedSchedule(scheduleName);
  console.debug("Cached schedule", scheduleName);
  if (cachedSchedule) return cachedSchedule;

  const response = await fetch(`./md/${scheduleName}.md`);
  if (!response.ok) return "";

  const schedule = await response.text();

  window.sessionStorage.setItem(
    scheduleName,
    JSON.stringify({ schedule, dateTime: new Date() })
  );

  console.debug("Fetched schedule", scheduleName);
  return schedule;
}

function getCahcedSchedule(scheduleName: string): string | null {
  const cachedScheduleString = window.sessionStorage.getItem(scheduleName);

  if (!cachedScheduleString) return null;
  const cachedSchedule: CachedSchedule = JSON.parse(cachedScheduleString);

  if (
    new Date(cachedSchedule.dateTime).getTime() >
    new Date().getTime() - 300000
  ) {
    return cachedSchedule.schedule;
  }

  localStorage.removeItem(scheduleName);

  return null;
}

export async function getWeekPreview(
  week: number,
  scheduleName: string
): Promise<HTMLElement | null> {
  const scheduleMd = await fetchSchedule(scheduleName);
  if (!scheduleMd) return null;

  const schedule = mdToGroupedHtmlSchedule(scheduleMd);

  const weekHtml =
    schedule.weekList.querySelector(`li[data-week='${week}']`)?.innerHTML ?? "";

  const preview = document.createElement("div");
  const title = document.createElement("h3");
  title.textContent = schedule.title;
  preview.appendChild(title);
  preview.innerHTML += weekHtml;

  preview.querySelector("[data-week-title]")?.remove();

  return preview;
}

export async function getSchedule(
  scheduleName: string
): Promise<Schedule | null> {
  const scheduleMd = await fetchSchedule(scheduleName);
  if (!scheduleMd) return null;

  const schedule = mdToGroupedHtmlSchedule(scheduleMd);

  return schedule;
}

export type CachedSchedule = {
  dateTime: Date;
  schedule: string;
};
