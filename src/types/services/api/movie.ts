import { TCreateMovieForm } from "@core/types/forms/movies/create";
import { TEditMovieForm } from "@core/types/forms/movies/edit";

import { TMovie } from "../movie";

export type TFetchMoviesQueryProps = {
  page?: number;
};

export type TUseFetchMoviesQueryProps = TFetchMoviesQueryProps;

export type TFetchMoviesQueryResponse = {
  movies: TMovie[];
  total: number;
};

export type TFetchMovieQueryResponse = TMovie;

export type TCreateMovieData = TCreateMovieForm;

export type TUpdateMovieData = TEditMovieForm;
