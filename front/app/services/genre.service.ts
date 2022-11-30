import { axiosClassic } from 'api/interceptors'

import { IGenre } from '@/shared/types/movie.types'

import { getGenresUrl } from '@/config/api.config'

console.log()
export const GenreService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},
}
