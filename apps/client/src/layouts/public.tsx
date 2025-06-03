import { HomeMenu } from '@/components/home-menu'
import { HomeNav } from '@/components/home-nav'
import { LanguageToggle } from '@/components/language-toggle'
import { Logo } from '@/components/logo'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
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
			<footer className='w-full justify-items-center pt-24 md:pt-32 pb-14 grid grid-cols-1 md:grid-cols-3 px-6 gap-4'>
				<Card className='bg-muted border-none py-4 w-4/5 md:w-full'>
					<CardTitle className='text-sm tracking-widest text-muted-foreground'>
						ABOUT
					</CardTitle>
					<CardDescription className='flex flex-col gap-4'>
						<span>
							Oak Template is a simple full stack monorepo
							template, using a React and Vite SPA for the Front
							end and a Node.js (Fastify + tRPC) for the Back end.
						</span>
						<span className='flex flex-col'>
							<span>Made with ☕ and ❤️ by Oak.</span>
							<span>
								Copyright &copy; 2025 - All rights reserved.
							</span>
						</span>
					</CardDescription>
				</Card>
				<Card className='bg-muted border-none py-4 w-4/5 md:w-full'>
					<CardTitle className='text-sm tracking-widest text-muted-foreground'>
						LINKS
					</CardTitle>
					<CardDescription className='flex flex-col'>
						<Link to='/login' className='hover:underline'>
							Login
						</Link>
						<Link to='/register' className='hover:underline'>
							Register
						</Link>
						<a href='#pricing' className='hover:underline'>
							Pricing
						</a>
					</CardDescription>
				</Card>
				<Card className='bg-muted border-none py-4 w-4/5 md:w-full'>
					<CardTitle className='text-sm tracking-widest text-muted-foreground'>
						LEGAL
					</CardTitle>
					<CardDescription className='flex flex-col'>
						<Link to='/terms' className='hover:underline'>
							Terms of services
						</Link>
						<Link to='/privacy' className='hover:underline'>
							Privacy Policy
						</Link>
					</CardDescription>
				</Card>
			</footer>
		</div>
	)
}
