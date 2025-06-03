import { useTranslation } from 'react-i18next'
import { Button } from './ui/button'
import { Languages } from 'lucide-react'

export function LanguageToggle() {
	const { i18n } = useTranslation()

	const toggleLanguage = () => {
		i18n.changeLanguage(i18n.language === 'en' ? 'pt' : 'en')
	}

	return (
		<Button variant='ghost' size='icon' onClick={toggleLanguage}>
			<Languages className='size-4' />
			<span className='sr-only'>Toggle language</span>
		</Button>
	)
}
