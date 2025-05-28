import { useQuery } from '@tanstack/react-query'
import { trpc } from './utils/trpc'
import { hello } from '@shared/utils'

export function Greeting() {
	const greeting = useQuery(trpc.greeting.queryOptions({ name: 'tRPC user' }))
	hello()

	return <div>{greeting.data?.text}</div>
}
