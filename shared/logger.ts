export const log = (content: string = 'hey', options: { type: 'ITER' | 'INFO' | 'MESSAGE' | 'ERROR' } = { type: 'MESSAGE' }) => {
	const _log = {
		'MESSAGE': console.log,
		'INFO': console.info,
		'ITER': console.table,
		'ERROR': console.error
	}
	_log[options.type](content)
}

