import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import SingleMovie from '@/components/screens/single-movie/SingleMovie'
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface'

import { IMovie } from '@/shared/types/movie.types'

import { MovieService } from '@/services/movie.service'

import { API_URL, IS_URL, getMoviesUrl } from '@/config/api.config'
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
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		// const { data: movies } = await MovieService.getAll()
		const res = await fetch(`${IS_URL}${getMoviesUrl('')}`)
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
		// const { data: movie } = await MovieService.getBySlug(String(params?.slug))

		const res = await fetch(
			`${IS_URL}${getMoviesUrl(`/by-slug/${params?.slug}`)}`
			// `http://localhost:3000/api/movies/by-slug/${params?.slug}`
		)
		const movie = await res.json()

		// const { data: dataSimilarMovies } = await MovieService.getByGenres(
		// 	movie.genres.map((g) => g._id)
		// )

		const resSimilarMovie = await fetch(
			`${IS_URL}${getMoviesUrl(`/by-genres`)}`,
			// 'http://localhost:3000/api/movies/by-genres',
			{
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json;charset=utf-8',
				},
				body: JSON.stringify({
					genreIds: [movie.genres.map((g: any) => g._id)],
				}),
			}
		)

		const dataSimilarMovies = await resSimilarMovie.json()

		const similarMovie: IGalleryItem[] = dataSimilarMovies
			.filter((m: IMovie) => m._id !== movie._id)
			.map((m: IMovie) => ({
				name: m.title,
				posterPath: m.poster,
				link: getMovieUrl(m.slug),
			}))

		return {
			props: {
				similarMovie,
				movie,
			},
			revalidate: 60,
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}

export default MoviePage
