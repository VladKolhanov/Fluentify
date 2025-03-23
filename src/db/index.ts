import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'

import { env } from '@/env'

import * as schema from './schema'

const dburl =
	env.NEXT_PUBLIC_NODE_ENV === 'test'
		? env.NEXT_PUBLIC_DB_MOCK
		: env.DATABASE_URL

const sql = neon(dburl)
export const db = drizzle({
	schema,
	client: sql,
	logger: true,
	casing: 'snake_case',
})
