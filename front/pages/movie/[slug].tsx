import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import SingleMovie from '@/components/screens/single-movie/SingleMovie'
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface'

import { IMovie } from '@/shared/types/movie.types'

import { MovieService } from '@/services/movie.service'

import { API_URL, getMoviesUrl } from '@/config/api.config'
import { getMovieUrl } from '@/config/url.config'

import Error404 from '../404'

export interface IMoviePage {
	movie: IMovie
	similarMovie: IGalleryItem[]
}

const MoviePage: NextPage<IMoviePage> = ({ similarMovie, movie }) => {
	return movie ? (
		<SingleMovie similarMovie={similarMovie || []} movie={movie} />
	) : (
		<Error404 />
	)
	// return <div>111</div>
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		// const { data: movies } = await MovieService.getAll()
		// console.log('111', movies)

		const res = await fetch(`${API_URL}${getMoviesUrl('')}`)
		const movies = await res.json()

		const paths = movies.map((a: any) => ({
			params: {
				slug: a.slug,
			},
		}))

		return { paths, fallback: 'blocking' }
	} catch (error) {
		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: movie } = await MovieService.getBySlug(String(params?.slug))

		// const res = await fetch(`${API_URL}${getMoviesUrl('')}`)
		// const slides = await res.json()

		console.log('11', movie)

		const { data: dataSimilarMovies } = await MovieService.getByGenres(
			movie.genres.map((g) => g._id)
		)

		const similarMovie: IGalleryItem[] = dataSimilarMovies
			.filter((m) => m._id !== movie._id)
			.map((m) => ({
				name: m.title,
				posterPath: m.poster,
				link: getMovieUrl(m.slug),
			}))

		return {
			props: {
				similarMovie,
				movie,
			},
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}

export default MoviePage
