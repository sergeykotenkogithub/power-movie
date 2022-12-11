import { useQuery } from 'react-query'

import { GenreService } from '@/services/genre.service'
import { MovieService } from '@/services/movie.service'

import { getGenreUrl } from '@/config/url.config'

export const usePopularGenres = () => {
	const queryData = useQuery('all film', () => MovieService.getAll(), {
		select: ({ data }) =>
			data
				.filter((genre) => genre.bigPoster)
				.map(
					(genre) =>
						({
							title: genre.title,
							slug: genre.slug,
							bigPoster: genre.bigPoster,
						} as any)
				),
	})
	return queryData
}
