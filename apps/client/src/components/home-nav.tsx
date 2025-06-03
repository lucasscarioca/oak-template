import { Button } from './ui/button'

export function HomeNav() {
	return (
		<nav className='hidden md:flex items-center gap-0.5'>
			<Button variant='ghost' asChild>
				<a href='#pricing'>Pricing</a>
			</Button>
			<Button variant='ghost' asChild>
				<a href='#faq'>FAQ</a>
			</Button>
			<Button variant='ghost' asChild>
				<a href='#reviews'>Reviews</a>
			</Button>
		</nav>
	)
}
