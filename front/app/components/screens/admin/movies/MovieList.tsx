import { FC } from 'react'

import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'

import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/ui/admin-table/AdminTable/AdminTable'
import { Heading } from '@/ui/heading/Heading'

import { Meta } from '@/utils/meta/Meta'

import { useMovies } from './useMovies'

const MovieList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useMovies()

	return (
		<Meta title="Movie">
			<AdminNavigation />
			<Heading title="Movie" />

			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Title', 'Genre', 'Rating']}
				tableItems={data || []}
			/>
		</Meta>
	)
}

export default MovieList
