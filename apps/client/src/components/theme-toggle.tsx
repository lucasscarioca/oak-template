import { Moon, Sun } from 'lucide-react'
import { Button } from './ui/button'
import { useTheme } from '@/lib/hooks/useTheme'

export function ThemeToggle() {
	const { setTheme, theme } = useTheme()

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}
	return (
		<Button variant='ghost' size='icon' onClick={toggleTheme}>
			<Sun className='size-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
			<Moon className='absolute size-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
			<span className='sr-only'>Toggle theme</span>
		</Button>
	)
}
