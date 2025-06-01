import type en from '../../../public/locales/en/translation.json'

type TranslationJson = typeof en

declare module 'i18next' {
	interface CustomTypeOptions {
		// defaultNS: typeof defaultNS
		resources: {
			translation: TranslationJson
		}
	}
}
