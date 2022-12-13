import dynamic from 'next/dynamic'
import { FC } from 'react'

import { PopularMovies } from './PopularMovies'

const DynamicFavoriteMovie = dynamic(
	() => import('./FavoriteMovie/FavoriteMovie'),
	{
		ssr: false,
	}
)

export const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovies />

			<DynamicFavoriteMovie />
		</div>
	)
}
