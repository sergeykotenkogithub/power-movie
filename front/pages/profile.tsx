import { NextPageAuth } from 'providers/AuthProvider/auth.types'

const ProfilePage: NextPageAuth = () => {
	return <div>profile</div>
}

ProfilePage.isOnlyUser = true

export default ProfilePage
