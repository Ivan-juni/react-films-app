import { Pagination } from "antd";
import React, { useEffect, useState } from "react";
import Film from "../../components/Film/Film";
import { useAppSelector } from "../../hooks/redux";
import { IFilm } from "../../models/film.types";
import { paginate } from "../../utils/pagination.util";
import styles from "./Favorite.module.scss";

const Favorite: React.FC = () => {
  // pagination
  const [paginationState, setPaginationState] = useState<IFilm[]>([]);
  const [page, setPage] = useState<number>(1);

  const { favorite_films } = useAppSelector((state) => state.film);

  // Pagnation page change
  const onHandleChange = (page: number) => {
    setPaginationState(paginate(favorite_films, 3, page));
    setPage(page);
  };

  useEffect(() => {
    // pagination
    setPaginationState(paginate(favorite_films, 3, page));
  }, [favorite_films.length]);

  return (
    <div className={styles.wrapper}>
      <h1>Favorite films</h1>
      <div className={styles.films}>
        {favorite_films.length !== 0 &&
          paginationState.map((f) => <Film key={f.id} filmData={f} />)}
        {favorite_films.length === 0 && (
          <h1 className={styles.nothing}>
            Please, add your favorite movies...
          </h1>
        )}
      </div>
      <div className={styles.pagination}>
        {favorite_films.length !== 0 && (
          <Pagination
            simple
            defaultCurrent={1}
            // current={page}
            defaultPageSize={3}
            total={favorite_films.length}
            onChange={(page) => onHandleChange(page)}
          />
        )}
      </div>
    </div>
  );
};

export default Favorite;
