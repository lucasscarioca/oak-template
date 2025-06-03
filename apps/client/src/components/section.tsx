import type { PropsWithChildren } from 'react'

type SectionProps = {
	label: string
	title: string
}
export function Section({
	children,
	label,
	title,
}: PropsWithChildren<SectionProps>) {
	return (
		<section
			id={label.toLowerCase()}
			className='container flex flex-col items-center text-center pt-16 md:pt-24'
		>
			<h2 className='leading-tight text-primary text-xs font-semibold tracking-wide'>
				{label}
			</h2>
			<span className='leading-tight text-2xl font-semibold tracking-tight text-balance'>
				{title}
			</span>
			<div className='mt-6 w-full'>{children}</div>
		</section>
	)
}
