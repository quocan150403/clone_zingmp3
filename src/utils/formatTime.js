import { format, getTime, formatDistanceToNow, differenceInWeeks } from 'date-fns';

// ----------------------------------------------------------------------

export function fDate(date, newFormat) {
  const fm = newFormat || 'dd MMM yyyy';

  return date ? format(new Date(date), fm) : '';
}

export function fHour(date, newFormat) {
  const fm = newFormat || 'p';

  return date ? format(new Date(date), fm) : '';
}

export function fDateTime(date, newFormat) {
  const fm = newFormat || 'dd MMM yyyy p';

  return date ? format(new Date(date), fm) : '';
}

export function fTimestamp(date) {
  return date ? getTime(new Date(date)) : '';
}

export function fToNow(date) {
  return date
    ? formatDistanceToNow(new Date(date), {
        addSuffix: true,
      })
    : '';
}

export function fTimeAgo(date) {
  return date
    ? formatDistanceToNow(new Date(date), {
        addSuffix: true,
      })
    : '';
}

export function fRelativeTimeAgo(date) {
  if (!date) {
    return '';
  }

  const currentDate = new Date();
  const inputDate = new Date(date);

  const yearDiff = currentDate.getFullYear() - inputDate.getFullYear();
  if (yearDiff > 0) {
    return `${yearDiff} năm trước`;
  }

  const monthDiff = currentDate.getMonth() - inputDate.getMonth();
  if (monthDiff > 0) {
    return `${monthDiff} tháng trước`;
  }

  const weekDiff = differenceInWeeks(currentDate, inputDate);
  if (weekDiff > 0) {
    return `${weekDiff} tuần trước`;
  }

  const dayDiff = currentDate.getDate() - inputDate.getDate();
  if (dayDiff > 0) {
    return `${dayDiff} ngày trước`;
  }

  return fTimeAgo(date);
}

export function fMinutes(floatValue) {
  if (isNaN(floatValue)) {
    return '';
  }

  const minutes = Math.floor(floatValue);
  const seconds = Math.round((floatValue - minutes) * 60);

  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
