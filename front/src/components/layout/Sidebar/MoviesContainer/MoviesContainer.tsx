import { FC } from 'react'

import { FavoriteMovie } from './FavoriteMovie/FavoriteMovie'
import { PopularMovies } from './PopularMovies'

export const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovies />

			<FavoriteMovie />
		</div>
	)
}
