import { createLogger, format, transports } from 'winston';
const { combine, timestamp, printf } = format;

const myFormat = printf(({ level, message, timestamp, label }) => {
	return `\x1b[5m \x1b[35m Test Console \x1b[0m \x1b[44m \x1b[33m ${timestamp} \x1b[1m \x1b[37m \x1b[45m ${level.toUpperCase()} \x1b[0m \n \x1b[4m \x1b[33m REASON : \x1b[1m --- ${label} --- \x1b[0m \n \x1b[1m \x1b[47m \x1b[30m ${message} \x1b[0m`;
});

const winstonLogger = createLogger({
	format: combine(timestamp(), myFormat),
	transports: [new transports.Console()],
});

export default function logger(level: levelType, label: string, errMessage?: string) {
	winstonLogger.log({
		level,
		label,
		message: errMessage ?? '',
	});
}

type levelType = 'error' | 'crit' | 'warning' | 'info' | 'debug' | 'alert' | 'notice' | 'emerg';
