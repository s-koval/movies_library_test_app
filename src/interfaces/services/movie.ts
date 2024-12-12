import {
  TMovie,
  TMovieCreateProps,
  TMovieFindByProps,
  TMovieFindManyProps,
  TMovieUpdateProps,
} from "@core/types/services/movie";

export interface IMovieService {
  create(props: TMovieCreateProps): Promise<void>;
  findBy(props: TMovieFindByProps): Promise<TMovie | null>;
  findMany(props: TMovieFindManyProps): Promise<TMovie[]>;
  update(props: TMovieUpdateProps): Promise<void>;
}
