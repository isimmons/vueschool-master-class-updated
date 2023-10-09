import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedDate from 'dayjs/plugin/localizedFormat';
dayjs.extend(relativeTime);
dayjs.extend(localizedDate);

export const timeDiffForHumans = (timestamp: number) => {
  return dayjs.unix(timestamp).fromNow();
};

export const humanFriendlyDate = (timestamp: number) => {
  return dayjs.unix(timestamp).format('llll');
};
