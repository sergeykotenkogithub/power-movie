import { FC } from 'react'

import { Heading } from '@/components/ui/heading/Heading'

import { Meta } from '@/utils/meta/Meta'

import { IHome } from './home.interface'

const Home: FC<IHome> = () => {
	return (
		<Meta
			title="Watch movie online"
			description="Watch MovieApp and TV shows online or stream right to your browser."
		>
			<Heading
				title="Watch movie online"
				className="text-gray-300 mb-8 text-xl"
			>
				Home page 111
			</Heading>
		</Meta>
	)
}
export default Home
