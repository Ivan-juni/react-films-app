import React, { useState } from 'react'
import { useGetFilmsQuery } from '../../api/film.api'
import { Pagination } from 'antd'
import Film from '../../components/Film/Film'
import 'antd/dist/antd.css'
import styles from './Home.module.scss'
import { IFilm } from '../../models/film.type'

const Home: React.FC = () => {
  const [page, setPage] = useState<number>(1)

  const { data: films, isLoading, error } = useGetFilmsQuery(page)

  return (
    <div className={styles.wrapper}>
      <h1>Top rated fims</h1>
      <div className={styles.pagination}>
        <Pagination
          simple
          defaultCurrent={1}
          defaultPageSize={20}
          current={page}
          total={films?.total_pages}
          onChange={(page) => setPage(page)}
        />
      </div>
      <div className={styles.films}>
        {isLoading ? (
          'Loading...'
        ) : error ? (
          <div className={styles.error}>Error has occured...</div>
        ) : (
          films &&
          films.results.map((film: IFilm) => (
            <Film key={film.id} filmData={film} />
          ))
        )}
      </div>
      <div className={styles.pagination}>
        <Pagination
          simple
          defaultCurrent={1}
          current={page}
          defaultPageSize={20}
          total={films?.total_pages}
          onChange={(page) => setPage(page)}
        />
      </div>
    </div>
  )
}

export default Home
