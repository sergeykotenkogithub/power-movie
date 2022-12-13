import axios from 'axios'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { useMoviesAllFilms } from '@/components/screens/home/useMoviesAllFilms'
import Catalog from '@/components/ui/catalog-movies/Catalog'

import { IActor, IMovie } from '@/shared/types/movie.types'

import { ActorService } from '@/services/actor.service'
import { MovieService } from '@/services/movie.service'

import { IS_URL, getMoviesUrl } from '@/config/api.config'

import Error404 from '../404'

interface IActorPage {
	movies: IMovie[]
	actor: IActor | undefined
}

const ActorPage: NextPage<IActorPage> = ({ movies, actor }) => {
	// const { data: movies } = useMoviesAllFilms()
	console.log('elllleeem', actor)
	return actor ? (
		<Catalog movies={movies || []} title={actor.name} />
	) : (
		<Error404 />
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: actors } = await ActorService.getAll()
		console.log('!!!acctor staarrryyy')

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

		// const res = await fetch(
		// 	`http://localhost:3000/api/movies/by-actor/${actor._id}`
		// )

		console.log('accctoorr')

		console.log('2222', `${IS_URL}${getMoviesUrl('/by-actor')}/${actor._id}`)

		const resActor = await fetch(
			`${IS_URL}${getMoviesUrl('/by-actor')}/${actor._id}`
		)
		// const res = await fetch(
		// 	`http://localhost:4200/api/movies/by-actor/${actor._id}`
		// )

		// fetch(`${IS_URL}${getMoviesUrl('/most-popular')}`)
		const movies = await resActor.json()

		console.log('11111', movies)

		return {
			props: {
				movies,
				actor,
			},
			revalidate: 60,
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}

export default ActorPage
