import { useQuery } from '@tanstack/react-query'
import { trpc } from '@/lib/utils'
import { useTranslation } from 'react-i18next'
import { useLocalizePage } from '@/lib/hooks'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router'
import { Logo } from '@/components/logo'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardTitle,
} from '@/components/ui/card'
import { Section } from '@/components/section'
import { Check, X } from 'lucide-react'

export function Home() {
	const { t } = useTranslation()
	useLocalizePage('page_title')
	const greeting = useQuery(trpc.greeting.queryOptions({ name: 'tRPC user' }))

	return (
		<div className='flex flex-1 flex-col px-4 items-center'>
			<section className='container flex flex-col items-center gap-2 md:gap-4 pt-12 md:pt-20 text-center'>
				<h1 className='leading-tight max-w-2xl text-4xl font-semibold tracking-tight text-balance'>
					<span className='mr-4'>Start using the</span>
					<Logo />
				</h1>
				<p className='max-w-3xl text-base text-balance'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Enim exercitationem eos quasi voluptatem reiciendis odit
					sint? Ea, possimus ratione fuga dicta ex laboriosam? Aperiam
					cum fugit neque voluptates? Quae, vel.
				</p>
				<div className='flex w-full items-center justify-center gap-2 pt-2'>
					<Button
						size='sm'
						className='text-foreground font-semibold'
						asChild
					>
						<Link to='/login'>Get Started</Link>
					</Button>
					<Button variant='outline' size='sm' asChild>
						<Link to='#contact'>Contact us</Link>
					</Button>
				</div>
			</section>
			<Section
				label='Features'
				title='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
			>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					<Card>
						<CardTitle>Feature 1</CardTitle>
						<CardDescription>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Voluptatem explicabo, dolores rerum ratione
							cupiditate dolor aut et pariatur deserunt vero velit
							autem porro. Magni quibusdam quia voluptate iure
							possimus deleniti.
						</CardDescription>
					</Card>
					<Card>
						<CardTitle>Feature 2</CardTitle>
						<CardDescription>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Odio eligendi id magni aspernatur architecto
							tenetur voluptas fugit sint numquam reiciendis! Odit
							mollitia alias maiores sit dolorem eveniet provident
							nulla necessitatibus.
						</CardDescription>
					</Card>
					<Card>
						<CardTitle>Feature 3</CardTitle>
						<CardDescription>
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Deleniti laborum eligendi laboriosam iure
							doloremque quam fugiat, velit soluta vero quae,
							iusto voluptas recusandae corrupti consequuntur
							repellat dignissimos necessitatibus fuga mollitia?
						</CardDescription>
					</Card>
					<Card>
						<CardTitle>Feature 4</CardTitle>
						<CardDescription>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Minus, id deleniti. Vitae quibusdam fuga vero
							hic. Voluptate molestiae error accusamus? Error
							quaerat molestias eius dolore autem doloribus
							maiores dolor officiis.
						</CardDescription>
					</Card>
				</div>
			</Section>
			<Section
				label='Demo'
				title='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
			>
				<Card>
					<CardTitle>How it works</CardTitle>
					<CardDescription>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Voluptatem explicabo, dolores rerum ratione cupiditate
						dolor aut et pariatur deserunt vero velit autem porro.
						Magni quibusdam quia voluptate iure possimus deleniti.
					</CardDescription>
					<CardContent className='text-center'>
						DEMO VIDEO
					</CardContent>
				</Card>
			</Section>
			<Section
				label='Pricing'
				title='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
			>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					<Card className='group hover:border-primary hover:shadow-primary transition-all duration-500 ease-out'>
						<CardTitle className='group-hover:text-primary'>
							Starter
						</CardTitle>
						<CardContent className='px-0'>
							<div className='flex items-end gap-1'>
								<span className='opacity-70 line-through text-xl text-muted-foreground'>
									$25
								</span>
								<span className='font-bold text-3xl'>$12</span>
								<span className='text-muted-foreground text-sm'>
									/ month
								</span>
							</div>
							<div className='flex flex-col gap-2 pt-5 text-sm'>
								<div className='flex items-center gap-1'>
									<Check className='size-4' />
									<span className='font-semibold'>
										Feature 1
									</span>
								</div>
								<div className='flex items-center gap-1'>
									<Check className='size-4' />
									<span className='font-semibold'>
										Feature 2
									</span>
								</div>
								<div className='flex items-center gap-1'>
									<Check className='size-4' />
									<span className='font-semibold'>
										Feature 3
									</span>
								</div>
								<div className='flex items-center gap-1 opacity-50'>
									<X className='size-4' />
									<span className='font-semibold'>
										Feature 4
									</span>
								</div>
							</div>
						</CardContent>
						<CardFooter className='px-0'>
							<Button
								size='lg'
								className='w-full text-background'
							>
								Get Started
							</Button>
						</CardFooter>
					</Card>
					<Card className='group hover:border-primary hover:shadow-primary transition-all duration-500 ease-out'>
						<CardTitle className='group-hover:text-primary'>
							Pro
						</CardTitle>
						<CardContent className='px-0'>
							<div className='flex items-end gap-1'>
								<span className='opacity-70 line-through text-xl text-muted-foreground'>
									$35
								</span>
								<span className='font-bold text-3xl'>$25</span>
								<span className='text-muted-foreground text-sm'>
									/ month
								</span>
							</div>
							<div className='flex flex-col gap-2 pt-5 text-sm'>
								<div className='flex items-center gap-1'>
									<Check className='size-4' />
									<span className='font-semibold'>
										Feature 1
									</span>
								</div>
								<div className='flex items-center gap-1'>
									<Check className='size-4' />
									<span className='font-semibold'>
										Feature 2
									</span>
								</div>
								<div className='flex items-center gap-1'>
									<Check className='size-4' />
									<span className='font-semibold'>
										Feature 3
									</span>
								</div>
								<div className='flex items-center gap-1'>
									<Check className='size-4' />
									<span className='font-semibold'>
										Feature 4
									</span>
								</div>
							</div>
						</CardContent>
						<CardFooter className='px-0'>
							<Button
								size='lg'
								className='w-full text-background'
							>
								Get Started
							</Button>
						</CardFooter>
					</Card>
				</div>
			</Section>
			{/* FAQs & Contact */}
			{/* Testimonials */}
			{/* Call to action */}
			<div>{t('hello', { name: 'Lucas' })}</div>
			<div>Test</div>
			<div>{greeting.data?.text}</div>
		</div>
	)
}
