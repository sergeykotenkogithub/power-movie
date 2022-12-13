import axios from 'axios'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import Catalog from '@/components/ui/catalog-movies/Catalog'

import { IGenre, IMovie } from '@/shared/types/movie.types'

import { GenreService } from '@/services/genre.service'
import { MovieService } from '@/services/movie.service'

import { API_URL, IS_URL, getMoviesUrl } from '@/config/api.config'

import Error404 from '../404'

interface IGenrePage {
	movies: IMovie[]
	genre: IGenre | undefined
}

const GenrePage: NextPage<IGenrePage> = ({ genre, movies }) => {
	return genre ? (
		<Catalog
			movies={movies || []}
			title={genre.name}
			description={genre.description}
		/>
	) : (
		<Error404 />
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: genres } = await GenreService.getAll()
		const paths = genres.map((g) => ({
			params: {
				slug: g.slug,
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
		const { data: genre } = await GenreService.getBySlug(String(params?.slug))
		// const { data: movies } = await MovieService.getByGenres([genre._id])

		// const res = await fetch('http://localhost:3000/api/movies/by-genres', {
		// const res = await fetch('http://localhost:3000/api/movies/by-genres', {

		// const res = await fetch(`${IS_URL}${getMoviesUrl('/by-genres')} , {
		const res = await fetch(`${IS_URL}${getMoviesUrl('/by-genres')}`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify({ genreIds: [genre._id] }),
		})

		const movies = await res.json()

		// const res = await axios.post('http://localhost:3000/api/movies/by-genres', {
		// 	genreIds: [genre._id],
		// })

		// const movies = res.data

		// const movies = [{}]

		// axios
		// 	.post('http://localhost:3000/api/movies/by-genres', {
		// 		genreIds: [genre._id],
		// 	})
		// 	.then((response) => {
		// 		console.log(response)
		// 	})

		// const movies = [{}]

		// console.log('111111111', res)

		return {
			props: { movies, genre },
			revalidate: 60,
		}
	} catch (e) {
		// console.log(errorCatch(e))

		return {
			props: {},
			// notFound: true,
		}
	}
}

export default GenrePage
