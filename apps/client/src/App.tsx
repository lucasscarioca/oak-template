import { QueryClientProvider } from '@tanstack/react-query'
import { Router } from './Router'
import { queryClient } from '@/lib/utils'

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Router />
		</QueryClientProvider>
	)
}
