import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useQuery } from 'react-query'

import { GenreService } from '@/services/genre.service'
import { MovieService } from '@/services/movie.service'

import { getGenresList } from '@/utils/movie/getGenresList'

import { getMovieUrl } from '@/config/url.config'

export const useGenresAllFilms = ({ slug }) => {
	const queryData = useQuery(
		'all films genres',
		() => GenreService.getBySlug(String(slug)),
		{
			select: ({ data }) => data,
		}
	)
	return queryData
}
