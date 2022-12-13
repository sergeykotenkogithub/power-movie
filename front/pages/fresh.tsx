import { GetStaticProps, NextPage } from 'next'

import { useMoviesAllFilms } from '@/components/screens/home/useMoviesAllFilms'
import Catalog from '@/components/ui/catalog-movies/Catalog'

import { IMovie } from '@/shared/types/movie.types'

import { MovieService } from '@/services/movie.service'

const FreshPage: NextPage<{ movies: IMovie[] }> = () => {
	const { data: movies } = useMoviesAllFilms()
	return (
		<Catalog
			movies={movies || []}
			title="Fresh movies"
			description="New movies"
		/>
	)
}

// export const getStaticProps: GetStaticProps = async () => {
// 	try {
// 		const { data: movies } = await MovieService.getAll()
// 		return {
// 			props: {
// 				movies,
// 			},
// 			revalidate: 60,
// 		}
// 	} catch (error) {
// 		return {
// 			notFound: true,
// 		}
// 	}
// }

export default FreshPage
