import { GetStaticProps, NextPage } from 'next'

import { useMoviesAllFilms } from '@/components/screens/home/useMoviesAllFilms'
import Catalog from '@/components/ui/catalog-movies/Catalog'

import { IMovie } from '@/shared/types/movie.types'

import { MovieService } from '@/services/movie.service'

import { IS_URL, getMoviesUrl } from '@/config/api.config'

const TrendingPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<Catalog
			movies={movies || []}
			title="Trending movies"
			description="Trending movies"
		/>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		// const movies = await MovieService.getMostPopularMovies()

		const res = await fetch(`${IS_URL}${getMoviesUrl('/most-popular')}`)
		const movies = await res.json()
		return {
			props: {
				movies,
			},
			revalidate: 60,
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}

export default TrendingPage
