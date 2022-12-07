import { FC } from 'react'

import styles from '../Admin.module.scss'

import CountUsers from './CountUsers'
import PopularMovies from './PopularMovies'

const Statistics: FC = () => {
	return (
		<div className={styles.statistics}>
			<CountUsers />
			<PopularMovies />
		</div>
	)
}

export default Statistics
