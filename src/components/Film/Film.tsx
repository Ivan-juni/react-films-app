import React from "react";
import { IFilm } from "../../models/film.types";
import styles from "./Film.module.scss";
import starEmptyImage from "../../assets/icons/star-empty.svg";
import starYellowImage from "../../assets/icons/star-yellow.svg";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/redux";

interface FilmItemProps {
  filmData: IFilm;
}

const Film: React.FC<FilmItemProps> = ({ filmData }) => {
  const { setFilm } = useActions();
  const navigate = useNavigate();

  const onFilmClick = () => {
    setFilm(filmData);
    navigate("/details");
  };

  return (
    <div className={styles.wrapper} onClick={onFilmClick}>
      <div className={styles.poster}>
        <img
          src={`http://image.tmdb.org/t/p/w342${filmData.poster_path}`}
          alt="poster"
          className={styles.thumb}
        />
        <div className={styles.info}>
          <h2 className={styles.title}>{filmData.title}</h2>
          <button className={styles.add__favotire}>
            <img
              src={starEmptyImage}
              className={styles.favorite__thumb}
              alt="add__favorite"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Film;