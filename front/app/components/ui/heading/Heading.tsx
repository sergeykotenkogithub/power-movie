import { FC } from 'react'

interface IHeading {
	title: string
	className?: string
	children?: React.ReactNode
}

export const Heading: FC<IHeading> = ({ title, className }) => {
	return (
		<h1
			className={`text-white text-opacity-80 font-semibold ${
				className?.includes('xl') ? '' : 'text-3xl'
			} ${className}`}
		>
			{title}
		</h1>
	)
}
