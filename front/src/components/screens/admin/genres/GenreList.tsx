import { FC } from 'react'

import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/components/ui/admin-table/AdminHeader/AdminHeader'
import { Heading } from '@/components/ui/heading/Heading'

import AdminTable from '@/ui/admin-table/AdminTable/AdminTable'

import { Meta } from '@/utils/meta/Meta'

import { useGenres } from './useGenres'

const GenreList: FC = () => {
	const {
		handleSearch,
		isLoading,
		searchTerm,
		data,
		deleteAsync,
		createAsync,
	} = useGenres()

	return (
		<Meta title="Genre">
			<AdminNavigation />
			<Heading title="Genre" />

			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Title', 'Slug']}
				tableItems={data || []}
			/>
		</Meta>
	)
}

export default GenreList
