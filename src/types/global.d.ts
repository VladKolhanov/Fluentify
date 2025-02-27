import { type formats } from '@/i18n/request'
import type en from '@/messages/en.json'

type Messages = typeof en

declare global {
	type IntlMessages = Messages
}

type Formats = typeof formats

declare global {
	type IntlFormats = Formats
}
