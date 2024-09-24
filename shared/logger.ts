import { LogType } from "./errors.types";

const handleLogArgs = (args) => {
	let content: [] = args;
	let type: keyof typeof LogType;
	const argsLength = args?.length;


	if (!argsLength) {
		throw Error('Missing arguments')
	}


	const potentialType = args[argsLength - 1];
	const hasType = Object.values(LogType).includes(potentialType);

	// Adjust `content` and `type`
	if (hasType) {
		type = args[argsLength - 1];
		content = args.slice(0, argsLength - 1);
	}

	type = type || LogType.DEFAULT

	return { content, type }
}

/**
 * Custom Logs error trace - coloured red
 * @param optionalText: optional Error header message text
 *  - reduces errors lines: no line from modules or node_modules
 * 	- up most trace line error is where the error was implemented
 * 	- down most trace line error is logger location
 */
const logErrorTrace = (optionalText?: string) => {
	const errorHeader = optionalText ? `[ ❌ ERROR TRACE ] - ${optionalText}` : '[ ❌ ERROR TRACE ]'
	const error = new Error(`\n${errorHeader}`);
	const errorLines = error?.stack.split('\n').filter(
		x => !x.includes('modules') && !x.startsWith('Error')
	)
	const appRelated = errorLines.join('\n')
	logger.ERROR(appRelated)
}




/**
 * Custom Error - coloured red
 * @param text 
 */
const logErrorText = (text) => {
	const message = `\n[ ❌ ERROR ] ${text}`;
	logger.ERROR(message)
}




/** Logger options functions  */
const logger = {
	[LogType.DEFAULT]: (x: any) => console.log.apply(null, x),
	[LogType.TEXT]: console.log,
	[LogType.OBJECT]: console.table,
	[LogType.ERROR]: console.error,
	[LogType.ERROR_TRACE]: console.error,
}




/** Enhance logs output display 
	- relative last argument position being a LogType
*/
export const log = (...args) => {
	try {
		const { content, type } = handleLogArgs(args);

		// Handles enhanced display for the different logger type but regular
		const isRegularLog = type === LogType.DEFAULT || type === LogType.TEXT
		if (!isRegularLog) {
			for (let innerContent of content) {
				if (typeof (innerContent) === 'object') {
					logger[LogType.OBJECT](innerContent)
				} else {
					type === LogType.ERROR_TRACE && logErrorTrace(innerContent);
					type === LogType.ERROR && logErrorText(innerContent);
					!/error/i.test(type) && logger[type](innerContent);
				}
			}
		} else {
			logger.DEFAULT(content);
		}

		// Extra line to display when error
		/error/i.test(type) && logger.TEXT('\n')

	} catch (error) {
		logErrorTrace(error)
	}

}




