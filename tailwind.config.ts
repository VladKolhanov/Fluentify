import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./.storybook/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				bree: 'var(--font-bree)',
				lato: 'var(--font-lato)',
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
		},
	},
	plugins: [],
} satisfies Config
