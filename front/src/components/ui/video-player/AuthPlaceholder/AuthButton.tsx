import Link from 'next/link'
import { FC } from 'react'

import { getMovieUrl } from '@/config/api.config'

import styles from './AuthPlaceholder.module.scss'

const AuthButton: FC<{ slug: string }> = ({ slug }) => {
	return (
		<Link
			href={`/auth?redirect=${getMovieUrl(`/${slug}`)}`}
			className={styles.btn}
		>
			Sign In
		</Link>
	)
}

export default AuthButton
