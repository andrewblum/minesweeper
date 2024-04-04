export const formatSeconds = (s) => {
  const totalSecs = Number(s);
  const hours = Math.floor(totalSecs / 3600);
  const minutes = Math.floor(totalSecs / 60) % 60;
  const seconds = totalSecs % 60;

  return [hours, minutes, seconds]
    .map((time) => (time < 10 ? "0" + time : time))
    .filter((time, idx) => time !== "00" || idx > 0)
    .join(":");
};
