import { defineConfig } from 'drizzle-kit'

import { env } from '@/configs/env'

import 'dotenv/config'

export default defineConfig({
	out: './src/db/migrations',
	schema: './src/db/schema.ts',
	dialect: 'postgresql',
	dbCredentials: {
		url: env.DATABASE_URL,
	},
})
