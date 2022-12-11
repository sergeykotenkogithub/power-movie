import { FC } from 'react'

import { SearchField } from '@/ui/search-field/SearchField'

import styles from './Search.module.scss'
import { SearchLIst } from './SearchList/SearchLIst'
import { useSearch } from './useSearch'

export const Search: FC = () => {
	const { isSuccess, data, handleSearch, searchTerm } = useSearch()
	return (
		<div className={styles.wrapper}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{isSuccess && <SearchLIst movies={data || []} />}
		</div>
	)
}
