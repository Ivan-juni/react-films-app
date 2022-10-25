import React from "react";
import { useGetFilmGenresQuery } from "../../api/film.api";
import { useAppSelector } from "../../hooks/redux";
import styles from "./Details.module.scss";

const Details = () => {
  const { film } = useAppSelector((state: any) => state);

  const { data } = useGetFilmGenresQuery();

  const modifyReleaseDate = () => {
    const splittedDate = film.release_date.split("-");

    const date = `${splittedDate[2]}.${splittedDate[1]}.${splittedDate[0]}`;

    return date;
  };

  const findGenres = () => {
    const genreNames: string[] = [];

    film.genre_ids.forEach((id: number) => {
      if (data) {
        const genre = data.genres.find((genre) => genre.id === id);
        if (genre) genreNames.push(genre.name);
      }
    });

    return genreNames;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.film__body}>
        <img
          src={`http://image.tmdb.org/t/p/w342${film.backdrop_path}`}
          alt="film_poster"
          className={styles.poster}
        />
        <div className={styles.film__info}>
          <h1 className={styles.title}>{film.original_title}</h1>
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
        <br></br>
        <span className={styles.text}>{film.overview}</span>
      </div>
    </div>
  );
};

export default Details;
