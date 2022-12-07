import { NextPageAuth } from 'providers/AuthProvider/auth.types'

import Admin from '@/screens/admin/home/Admin'

const AdminPage: NextPageAuth = () => {
	return <Admin />
}

AdminPage.isOnlyAdmin = true

export default AdminPage
