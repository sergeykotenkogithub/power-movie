import { NextPageAuth } from 'providers/AuthProvider/auth.types'

import ActorList from '@/components/screens/admin/actors/ActorList'

const GenreListPage: NextPageAuth = () => {
	return <ActorList />
}

GenreListPage.isOnlyAdmin = true

export default GenreListPage
