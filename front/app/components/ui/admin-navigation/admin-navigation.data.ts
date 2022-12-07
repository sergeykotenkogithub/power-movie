import { getAdminHomeUrl, getAdminUrl } from '@/config/url.config'

import { INavItem } from './admin-navigation.interface'

export const navItems: INavItem[] = [
	{
		title: 'Statistics',
		link: getAdminHomeUrl(),
	},
	{
		title: 'Users',
		link: getAdminUrl('users'),
	},
	{
		title: 'Statistics',
		link: getAdminUrl('movies'),
	},
	{
		title: 'Statistics',
		link: getAdminUrl('actors'),
	},
	{
		title: 'Statistics',
		link: getAdminUrl('genres'),
	},
]
