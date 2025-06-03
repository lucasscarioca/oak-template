import { HomeMenu } from '@/components/home-menu'
import { HomeNav } from '@/components/home-nav'
import { LanguageToggle } from '@/components/language-toggle'
import { Logo } from '@/components/logo'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Link, Outlet } from 'react-router'

export function PublicLayout() {
	return (
		<div className='relative z-10 min-h-svh flex flex-col'>
			<header className='sticky top-0 z-50 w-full h-10 md:h-14 px-6 flex items-center gap-2 bg-background/90'>
				<HomeMenu />
				<Button
					variant='ghost'
					asChild
					size='sm'
					className='hidden md:flex text-primary hover:text-primary'
				>
					<Link to='/'>
						<Logo />
					</Link>
				</Button>
				<HomeNav />
				<div className='ml-auto flex items-center gap-0.5 justify-end md:flex-1'>
					<Button variant='ghost' size='sm' asChild>
						<Link to='/login'>Login</Link>
					</Button>
					<Button variant='ghost' size='sm' asChild>
						<Link to='/register'>Register</Link>
					</Button>
					<LanguageToggle />
					<ThemeToggle />
				</div>
			</header>
			<main className='flex-1'>
				<Outlet />
			</main>
			<footer className='w-full flex items-center justify-between px-6'>
				<div>home footer</div>
				<div>Oak</div>
			</footer>
		</div>
	)
}
