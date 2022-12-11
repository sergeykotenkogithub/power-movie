import { IActor, IGenre } from '@/shared/types/movie.types'

export interface IActorEditInput extends Omit<IActor, '_id'> {}
