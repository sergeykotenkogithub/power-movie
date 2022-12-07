import { NextPageAuth } from 'providers/AuthProvider/auth.types'

import UserList from '@/components/screens/admin/users/UserList'

const UsersLIstPage: NextPageAuth = () => {
	return <UserList />
}

UsersLIstPage.isOnlyAdmin = true

export default UsersLIstPage
