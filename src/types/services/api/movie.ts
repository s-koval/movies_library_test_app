import { TMovieForm } from "@core/types/forms/movies";

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

export type TCreateMovieData = Required<TMovieForm>;

export type TUpdateMovieData = TMovieForm;
