export default function calcDateDiff(time) {
  const current = new Date().getTime();
  const record = new Date(time).getTime();
  const diff = current - record;
  const seconds = diff / 1000;
  if (seconds < 60) return `${Math.floor(seconds)}초 전`;
  const minutes = seconds / 60;
  if (minutes < 60) return `${Math.floor(minutes)}분 전`;
  const hours = minutes / 60;
  if (hours < 24) return `${Math.floor(hours)}시간 전`;
  const days = hours / 24;
  if (days < 7) return `${Math.floor(days)}일 전`;
  const weeks = days / 7;
  return `${Math.floor(weeks)}주 전`;
}
