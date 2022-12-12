import { NextPageAuth } from 'providers/AuthProvider/auth.types'

import Profile from '@/components/screens/profile/Profile'

const ProfilePage: NextPageAuth = () => {
	return <Profile />
}

ProfilePage.isOnlyUser = true

export default ProfilePage
