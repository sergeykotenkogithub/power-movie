import { useQuery } from 'react-query'

import { GenreService } from '@/services/genre.service'
import { MovieService } from '@/services/movie.service'

import { getGenresList } from '@/utils/movie/getGenresList'

import { getMovieUrl } from '@/config/url.config'

export const useMoviesAllFilms = () => {
	const queryData = useQuery('all films', () => MovieService.getAll(), {
		select: ({ data }) =>
			data
				// .filter((movie) => movie.bigPoster)
				.slice(0, 3)
				.map(
					(movie) =>
						({
							_id: movie._id,
							link: getMovieUrl(movie.slug),
							bigPoster: movie.bigPoster,
							subTitle: getGenresList(movie.genres),
							title: movie.title,
							slug: movie.slug,
						} as any)
				),
	})
	return queryData
}
