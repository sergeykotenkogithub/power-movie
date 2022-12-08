import { NextPageAuth } from 'providers/AuthProvider/auth.types'

import UserList from '@/components/screens/admin/users/UserList'

const UsersListPage: NextPageAuth = () => {
	return <UserList />
}

UsersListPage.isOnlyAdmin = true

export default UsersListPage
