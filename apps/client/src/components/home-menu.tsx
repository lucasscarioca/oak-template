import { Menu } from 'lucide-react'
import { Button } from './ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from './ui/dropdown-menu'

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
						<a href='#pricing' className='justify-start'>
							Pricing
						</a>
					</Button>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Button variant='ghost' size='lg' asChild>
						<a href='#faq' className='justify-start'>
							FAQ
						</a>
					</Button>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Button variant='ghost' size='lg' asChild>
						<a href='#reviews' className='justify-start'>
							Reviews
						</a>
					</Button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
