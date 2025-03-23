import { defineConfig } from 'drizzle-kit'

import { env } from '@/env'

import 'dotenv/config'

const dburl =
	env.NEXT_PUBLIC_NODE_ENV === 'test'
		? env.NEXT_PUBLIC_DB_MOCK
		: env.DATABASE_URL

export default defineConfig({
	out: './src/db/migrations',
	schema: './src/db/schema.ts',
	dialect: 'postgresql',
	dbCredentials: {
		url: dburl,
	},
})
