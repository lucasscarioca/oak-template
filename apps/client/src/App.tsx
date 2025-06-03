import { QueryClientProvider } from '@tanstack/react-query'
import { Router } from './Router'
import { queryClient } from '@/lib/utils'
import { ThemeProvider } from '@/lib/providers'

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
				<Router />
			</ThemeProvider>
		</QueryClientProvider>
	)
}
