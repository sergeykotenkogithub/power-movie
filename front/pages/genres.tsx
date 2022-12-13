import { GetStaticProps, NextPage } from 'next'

import Collections from '@/components/screens/collections/Collections'
import { ICollection } from '@/components/screens/collections/collections.interface'

import { GenreService } from '@/services/genre.service'

import { API_URL, getMoviesUrl } from '@/config/api.config'

import Error404 from './404'

const GenresPage: NextPage<{ collections: ICollection[] }> = ({
	collections,
}) => {
	return collections ? (
		<Collections collections={collections || []} />
	) : (
		<Error404 />
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: collections } = await GenreService.getCollections()

		// const res = await fetch(`${API_URL}${getMoviesUrl('/most-popular')}`)
		// const movies = await res.json()
		return {
			props: {
				collections,
			},
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}

export default GenresPage
