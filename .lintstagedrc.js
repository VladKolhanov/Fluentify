import path from 'path'

const buildEslintCommand = (filenames) =>
	`next lint --fix --file ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join(' --file ')}`

const buildTypeCheckCommand = () => `tsc --noEmit --pretty`

export default {
	'*.{js,jsx,ts,tsx}': [buildEslintCommand],
	'*.{ts,tsx}': [buildTypeCheckCommand],
}
