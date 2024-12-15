import {
  TMovie,
  TMoviesCountProps,
  TMoviesCreateProps,
  TMoviesFindByProps,
  TMoviesFindManyProps,
  TMoviesUpdateProps,
} from "@core/types/services/movie";

export interface IMovieService {
  create(props: TMoviesCreateProps): Promise<void>;
  findFirst(props: TMoviesFindByProps): Promise<TMovie | null>;
  findMany(props: TMoviesFindManyProps): Promise<TMovie[]>;
  update(props: TMoviesUpdateProps): Promise<void>;
  count(props: TMoviesCountProps): Promise<number>;
}
