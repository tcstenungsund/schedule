export async function fetchAssignment(link: string) {
  if (!link) return "";
  if (!link.endsWith(".md")) link += ".md";

  const cachedAssignment = getCahcedAssignment(link);
  if (cachedAssignment) {
    console.debug("Cached assignment", link);
    return cachedAssignment;
  }

  const response = await fetch(`./md/${link}`);
  if (!response.ok) return "";

  const assignment = await response.text();

  window.sessionStorage.setItem(
    link,
    JSON.stringify({ assignment, dateTime: new Date() })
  );

  console.debug("Fetched assignment", link);
  return assignment;
}

function getCahcedAssignment(link: string): string | null {
  const cachedAssignmentString = window.sessionStorage.getItem(link);

  if (!cachedAssignmentString) return null;
  const cachedAssignment: CachedAssignment = JSON.parse(cachedAssignmentString);

  if (
    new Date(cachedAssignment.dateTime).getTime() >
    new Date().getTime() - 300000
  ) {
    return cachedAssignment.assignment;
  }

  localStorage.removeItem(link);

  return null;
}

type CachedAssignment = {
  assignment: string;
  dateTime: Date;
};
