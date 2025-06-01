import type { Resources } from 'i18next'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export function useLocalizePage(title: keyof Resources['translation']) {
	const { t, i18n } = useTranslation()

	useEffect(() => {
		document.title = t(title)
	}, [i18n.resolvedLanguage, t])
}
