import axios from 'axios'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { useMoviesAllFilms } from '@/components/screens/home/useMoviesAllFilms'
import Catalog from '@/components/ui/catalog-movies/Catalog'

import { IActor, IMovie } from '@/shared/types/movie.types'

import { ActorService } from '@/services/actor.service'
import { MovieService } from '@/services/movie.service'

import Error404 from '../404'

interface IActorPage {
	movies: IMovie[]
	actor: IActor | undefined
}

const ActorPage: NextPage<IActorPage> = ({ movies, actor }) => {
	// const { data: movies } = useMoviesAllFilms()
	// console.log('222', movies)

	return actor ? (
		<Catalog movies={movies || []} title={actor.name} />
	) : (
		<Error404 />
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: actors } = await ActorService.getAll()
		const paths = actors.map((a) => ({
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
		const { data: actor } = await ActorService.getBySlug(String(params?.slug))
		// const { data: movies } = await MovieService.getByActor(actor._id)
		// console.log(movies)

		const res = await fetch(
			`http://localhost:3000/api/movies/by-actor/${actor._id}`
		)
		const movies = await res.json()
		// const movies = res.data

		return {
			props: {
				movies,
				actor,
			},
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}

export default ActorPage
