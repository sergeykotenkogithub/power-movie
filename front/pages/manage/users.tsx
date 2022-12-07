import { NextPageAuth } from 'providers/AuthProvider/auth.types'

const UsersLIstPage: NextPageAuth = () => {
	return <div>users</div>
}

UsersLIstPage.isOnlyAdmin = true

export default UsersLIstPage
