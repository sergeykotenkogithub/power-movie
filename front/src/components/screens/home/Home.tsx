import { FC, useEffect } from 'react'

import Gallery from '@/components/ui/gallery/Gallery'
import { Heading } from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/heading/SubHeading'
import Slider from '@/components/ui/slider/Slider'

import { Meta } from '@/utils/meta/Meta'

import { IHome } from './home.interface'
import { useMoviesAllFilms } from './useMoviesAllFilms'

const Home: FC<any> = ({ slides, actors, trendingMovies }) => {
	const { isLoading, data } = useMoviesAllFilms()

	return (
		<Meta
			title="Watch movie online"
			description="Watch MovieApp and TV shows online or stream right to your browser."
		>
			<Heading
				title="Watch movie online"
				className="text-gray-300 mb-8 text-xl"
			/>
			{data?.length && <Slider slides={data} />}
			{/* {slides?.length && <Slider slides={slides} />} */}

			<div className="my-10">
				<SubHeading title="Trending now" />
				{trendingMovies.length && <Gallery items={trendingMovies} />}
			</div>

			<div className="my-10">
				<SubHeading title="Best actors" />
				{actors.length && <Gallery items={actors} />}
			</div>
		</Meta>
	)
}
export default Home
