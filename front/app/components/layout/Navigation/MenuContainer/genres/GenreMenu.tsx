import { FC } from 'react'

import { SkeletonLoader } from '@/ui/SkeletonLoader'

import { Menu } from '../Menu'

import { usePopularGenres } from './usePopularGenres'

export const GenreMenu: FC = () => {
	const { isLoading, data } = usePopularGenres()

	//  вместо isLoading поставить true чтобы проверить Skeleton
	return isLoading ? (
		<div className="mx-11 mb-6">
			<SkeletonLoader count={5} className="h-7 mt-6" />
		</div>
	) : (
		<Menu menu={{ title: 'Popular genres', items: data || [] }} />
	)
}
