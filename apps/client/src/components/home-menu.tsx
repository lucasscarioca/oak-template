import { Menu } from 'lucide-react'
import { Button } from './ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Link } from 'react-router'

export function HomeMenu() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='ghost' size='sm' className='md:hidden'>
					<Menu className='size-5' />
					Menu
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-[80svw]' align='start'>
				<DropdownMenuItem asChild>
					<Button variant='ghost' size='lg' asChild>
						<Link to='#pricing' className='justify-start'>
							Pricing
						</Link>
					</Button>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Button variant='ghost' size='lg' asChild>
						<Link to='#faq' className='justify-start'>
							FAQ
						</Link>
					</Button>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Button variant='ghost' size='lg' asChild>
						<Link to='#reviews' className='justify-start'>
							Reviews
						</Link>
					</Button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
