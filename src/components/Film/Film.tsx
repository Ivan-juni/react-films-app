import React from 'react'
import styles from './Film.module.scss'
import { IFilm } from '../../models/film.type'
import { ReactComponent as StarEmptyImage } from '../../assets/icons/star-empty.svg'
import { ReactComponent as StarYellowImage } from '../../assets/icons/star-yellow.svg'
import { useNavigate } from 'react-router-dom'
import { useActions, useAppSelector } from '../../hooks/redux'
import { checkIfExists } from '../../utils/checkIfExists.util'

interface FilmItemProps {
  filmData: IFilm
}

const Film: React.FC<FilmItemProps> = ({ filmData }) => {
  const { setFilm, addToFavorite, removeFromFavorite } = useActions()
  const { favorite_films } = useAppSelector((state) => state.film)
  const navigate = useNavigate()

  const onFilmClick = () => {
    setFilm(filmData)
    navigate('/details')
  }

  const onFavoriteAddClick = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.stopPropagation()
    addToFavorite(filmData)
  }
  const onFavoriteRemoveClick = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.stopPropagation()
    removeFromFavorite({ id: filmData.id })
  }

  return (
    <div className={styles.wrapper} onClick={onFilmClick}>
      <div className={styles.poster}>
        <img
          src={`http://image.tmdb.org/t/p/w342${filmData.poster_path}`}
          alt='poster'
          className={styles.thumb}
        />
        <div className={styles.info}>
          <h2 className={styles.title}>{filmData.title}</h2>
          <button className={styles.add__favorite}>
            {checkIfExists(filmData, favorite_films) ? (
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
      </div>
    </div>
  )
}

export default Film
