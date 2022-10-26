import { IFilm } from "../models/film.types";

// функция для пагинации массива
export const paginate = (
  array: IFilm[],
  page_size: number,
  page_number: number
) => {
  // slice([begin, end])
  return array.slice((page_number - 1) * page_size, page_number * page_size);
};
