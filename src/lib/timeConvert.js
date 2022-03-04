export default function timeConvert(stringTime) {
  if (!stringTime) return '-';
  const time = Math.round(Number(stringTime) / 10);
  let ms = time % 100;
  ms = ms < 10 ? '0' + String(ms) : ms;
  let seconds = Math.floor((time % 6000) / 100);
  seconds = seconds < 10 ? '0' + String(seconds) : seconds;
  const minutes = Math.floor(time / 6000);
  return `${minutes}'${seconds}'${ms}`;
}
