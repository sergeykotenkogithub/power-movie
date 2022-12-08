import { NextPageAuth } from 'providers/AuthProvider/auth.types'

import MovieEdit from '@/components/screens/admin/movie/MovieEdit'

const MovieEditPage: NextPageAuth = () => {
	return <MovieEdit />
}

MovieEditPage.isOnlyAdmin = true

export default MovieEditPage
