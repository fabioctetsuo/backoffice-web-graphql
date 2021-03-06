import { utcToZonedTime, format } from 'date-fns-tz';
const SAO_PAULO_TIME_ZONE = 'America/Sao_Paulo';

export const getDateFromHour = (value: string) => {
  if (!value) return;
  const [hour, minutes] = value.substring(0, 5).split(':');
  return utcToZonedTime(new Date().setHours(+hour, +minutes, 0, 0), SAO_PAULO_TIME_ZONE);
};

export const getHourFromDate = (date: Date | string) => {
  return `${format(date, 'HH:mmxxx', {
    timeZone: SAO_PAULO_TIME_ZONE,
  })}`;
};

export const isOpen24hrs = (start?: string, end?: string) => {
  if (!start || !end) return false;
  return start.substring(0, 5) === '00:00' && end.substring(0, 5) === '23:59';
};
