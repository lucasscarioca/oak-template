import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './utils/trpc'
import { Greeting } from './Greeting'

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Greeting />
		</QueryClientProvider>
	)
}
