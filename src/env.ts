import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
	server: {
		DATABASE_URL: z.string().url(),
	},
	client: {
		NEXT_PUBLIC_NODE_ENV: z.enum(['development', 'production', 'test']),
		NEXT_PUBLIC_DB_MOCK: z.string().url(),
	},
	runtimeEnv: {
		DATABASE_URL: process.env['DATABASE_URL'],
		NEXT_PUBLIC_DB_MOCK: process.env['NEXT_PUBLIC_DB_MOCK'],
		NEXT_PUBLIC_NODE_ENV: process.env['NEXT_PUBLIC_NODE_ENV'],
	},
})
