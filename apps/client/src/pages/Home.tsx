import { useQuery } from '@tanstack/react-query'
import { trpc } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'
import { useLocalizePage } from '@/lib/hooks'

export function Home() {
	const { t, i18n } = useTranslation()
	useLocalizePage('page_title')
	const greeting = useQuery(trpc.greeting.queryOptions({ name: 'tRPC user' }))

	return (
		<div className='grid grid-cols-3 place-content-center'>
			<div>{t('hello', { name: 'Lucas' })}</div>
			<div>
				<Button onClick={() => i18n.changeLanguage('pt')}>
					change to pt
				</Button>
				<Button onClick={() => i18n.changeLanguage('en')}>
					change to en
				</Button>
			</div>
			<div>{greeting.data?.text}</div>
		</div>
	)
}
