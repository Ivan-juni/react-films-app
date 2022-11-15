import React from 'react'
import { useGetFilmGenresQuery } from '../../api/film.api'
import { useActions, useAppSelector } from '../../hooks/redux'
import { checkIfExists } from '../../utils/checkIfExists.util'
import styles from './Details.module.scss'
import { ReactComponent as StarEmptyImage } from '../../assets/icons/star-empty.svg'
import { ReactComponent as StarYellowImage } from '../../assets/icons/star-yellow.svg'

const Details = () => {
  const { film, favorite_films } = useAppSelector((state) => state.film)
  const { addToFavorite, removeFromFavorite } = useActions()
  const { data } = useGetFilmGenresQuery()

  const modifyReleaseDate = () => {
    const splittedDate = film.release_date.split('-')

    const date = `${splittedDate[2]}.${splittedDate[1]}.${splittedDate[0]}`

    return date
  }

  const findGenres = () => {
    const genreNames: string[] = []

    film.genre_ids.forEach((id: number) => {
      if (data) {
        const genre = data.genres.find((genre) => genre.id === id)
        if (genre) genreNames.push(genre.name)
      }
    })

    return genreNames
  }

  const onFavoriteAddClick = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.stopPropagation()
    addToFavorite(film)
  }
  const onFavoriteRemoveClick = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.stopPropagation()
    removeFromFavorite({ id: film.id })
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.film__body}>
        <div className={styles.film__image}>
          <img
            src={`http://image.tmdb.org/t/p/w342${film.backdrop_path}`}
            alt='film_poster'
            className={styles.poster}
          />
        </div>
        <div className={styles.film__info}>
          <div className={styles.film__title}>
            <h1 className={styles.title}>{film.title}</h1>
            <button className={styles.add__favorite}>
              {checkIfExists(film, favorite_films) ? (
                <StarYellowImage
                  className={styles.favorite__thumb}
                  onClick={onFavoriteRemoveClick}
                />
              ) : (
                <StarEmptyImage
                  className={styles.favorite__thumb}
                  onClick={onFavoriteAddClick}
                />
              )}
            </button>
          </div>
          <h3 className={styles.popularity}>
            Popularity: <span>{film.popularity}</span>
          </h3>
          <h3 className={styles.release}>
            Release: <span>{modifyReleaseDate()}</span>
          </h3>
          <ul className={styles.genres}>
            <span>Genres:</span>
            {findGenres().map((genre) => (
              <li key={genre}>| {genre} |</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.overview}>
        <span className={styles.caption}>Film overview</span>
        <span className={styles.text}>{film.overview}</span>
      </div>
    </div>
  )
}

export default Details
