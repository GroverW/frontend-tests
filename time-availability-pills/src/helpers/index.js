export const formatTime = (dateTime) => {
  const numHours = dateTime.getHours();
  const hourFormat = numHours > 12 ? numHours - 12 : numHours;
  const amPM = numHours >= 12 ? 'pm' : 'am';
  const numMinutes = dateTime.getMinutes();
  const minuteFormat = numMinutes ? `:${numMinutes}` : '';
  return `${hourFormat}${minuteFormat} ${amPM}`;
};

export const countIntervals = (start, end, duration) =>
  Math.floor((end - start) / 1000 / 60 / duration) + 1;

export const getIntervalsMap = (startDateTime, endDateTime, duration) => {
  const start = new Date(startDateTime.getTime());
  const end = new Date(endDateTime.getTime());
  const numIntervals = countIntervals(start, end, duration);

  return new Array(numIntervals).fill(0).map((_, i) =>
    new Date(start.setMinutes(start.getMinutes() + duration * (i > 0))),
  );
};

export const getEventsMap = (events) =>
  events
    .map(({ start, end }) => ({ start: new Date(start), end: new Date(end) }))
    .sort((a, b) => a.start - b.start || a.end - b.end);

export const getAvailabilityMap = (intervalStarts, duration, eventsList) => {
  const events = getEventsMap(eventsList);

  let current = 0;

  return intervalStarts.map((start) => {
    const end = new Date(start.getTime())
    end.setMinutes(end.getMinutes() + duration);
    while (events[current] && events[current].end <= start) current += 1;
    console.log(events[current], start, end);
    if (!events[current] || end <= events[current].start) return 'available';
    return 'unavailable';
  });
};
