import { Link } from 'react-router'
import { Button } from './ui/button'

export function HomeNav() {
	return (
		<nav className='hidden md:flex items-center gap-0.5'>
			<Button variant='ghost' asChild>
				<Link to='#pricing'>Pricing</Link>
			</Button>
			<Button variant='ghost' asChild>
				<Link to='#faq'>FAQ</Link>
			</Button>
			<Button variant='ghost' asChild>
				<Link to='#reviews'>Reviews</Link>
			</Button>
		</nav>
	)
}
