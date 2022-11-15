import { IFilm } from '../../models/film.type'

export interface IResponse {
  page: number
  results: IFilm[]
  total_pages: number
  total_results: number
}

interface Genre {
  id: number
  name: string
}
export interface IGenre {
  genres: Genre[]
}
