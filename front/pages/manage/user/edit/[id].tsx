import { NextPageAuth } from 'providers/AuthProvider/auth.types'

import UserEdit from '@/components/screens/admin/user/UserEdit'

const UserEditPage: NextPageAuth = () => {
	return <UserEdit />
}

UserEditPage.isOnlyAdmin = true

export default UserEditPage
