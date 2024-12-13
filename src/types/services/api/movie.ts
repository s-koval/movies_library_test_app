import { TCreateMovieForm } from "@core/types/forms/movies/create";

import { TMovie } from "../movie";

export type TFetchMoviesQueryProps = {
  page?: number;
};

export type TUseFetchMoviesQueryProps = TFetchMoviesQueryProps;

export type TFetchMoviesQueryResponse = {
  movies: TMovie[];
  total: number;
};

export type TCreateMovieData = TCreateMovieForm;
