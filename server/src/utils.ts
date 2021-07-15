import * as c from 'colorette';
import dayjs from 'dayjs';

export const timestamp = () => {
	const now = dayjs().format('HH:mm:ss');
	return c.bold(c.gray(now));
};

export const title = (word: string) => c.blue(`[${word.toUpperCase()}]`);
