import { GetStaticProps, NextPage } from 'next'
import { useQuery } from 'react-query'

import Home from '@/components/screens/home/Home'
import { IHome } from '@/components/screens/home/home.interface'
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface'
import { ISlide } from '@/components/ui/slider/slider.interface'

import { ActorService } from '@/services/actor.service'
import { MovieService } from '@/services/movie.service'

import { getGenresList } from '@/utils/movie/getGenresList'

import { API_URL, getMoviesUrl } from '@/config/api.config'
import { getActorUrl, getMovieUrl } from '@/config/url.config'

const HomePage: NextPage<any> = ({ slides, actors, trendingMovies }) => {
	return (
		<Home slides={slides} actors={actors} trendingMovies={trendingMovies} />
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		// const { data: movies } = await MovieService.getAll()
		// console.log(movies)

		const res = await fetch(`${API_URL}${getMoviesUrl('')}`)
		const slides = await res.json()
		// const slides = await slidesRes.slice(0, 3)

		// console.log(JSON.stringify(movies))

		// console.log('start11', JSON.stringify(movies))

		// const slides: ISlide[] = movies.slice(0, 1).map((movie) => ({
		// 	_id: movie._id,
		// 	link: getMovieUrl(movie.slug),
		// 	bigPoster: movie.bigPoster,
		// 	subTitle: getGenresList(movie.genres),
		// 	title: movie.title,
		// }))

		// console.log('sssssllll', slidess)

		const { data: dataActors } = await ActorService.getAll()

		const actors: IGalleryItem[] = dataActors.map((a) => ({
			name: a.name,
			posterPath: a.photo,
			link: getActorUrl(a.slug),
			content: {
				title: a.name,
				subTitle: `+${a.countMovies} movies`,
			},
		}))

		// console.log('getMostPopularMovies')

		// const dataTrendingMovies = await MovieService.getMostPopularMovies()

		const resPopular = await fetch(`${API_URL}${getMoviesUrl('/most-popular')}`)
		const dataTrendingMovies = await resPopular.json()

		// console.log('111', dataTrendingMovies)

		const trendingMovies: IGalleryItem[] = dataTrendingMovies
			.slice(0, 7)
			.map((m: any) => ({
				name: m.title,
				posterPath: m.poster,
				link: getMovieUrl(m.slug),
			}))

		return {
			props: {
				slides,
				actors,
				trendingMovies,
			} as IHome,
		}
	} catch (error) {
		return {
			props: {
				slides: [],
				actors: [],
				trendingMovies: [],
			} as IHome,
		}
	}
}

export default HomePage
