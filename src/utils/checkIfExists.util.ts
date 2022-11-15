import { IFilm } from '../models/film.type'

export const checkIfExists = (film: IFilm, array: IFilm[]) => {
  const exists = array.find((f) => f.id === film.id)
  if (exists === undefined) {
    return false
  } else {
    return true
  }
}
