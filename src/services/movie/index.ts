import { IMovieService } from "@core/interfaces/services/movie";
import {
  TMovie,
  TMovieCreateProps,
  TMovieFindByProps,
  TMovieFindManyProps,
  TMovieUpdateProps,
} from "@core/types/services/movie";
import prismaClient from "../db";

export class MovieService implements IMovieService {
  async create(props: TMovieCreateProps): Promise<void> {
    await prismaClient.movie.create(props);
  }

  async findBy(props: TMovieFindByProps): Promise<TMovie | null> {
    return await prismaClient.movie.findFirst(props);
  }

  async findMany(props: TMovieFindManyProps): Promise<TMovie[]> {
    return await prismaClient.movie.findMany(props);
  }

  async update(props: TMovieUpdateProps): Promise<void> {
    await prismaClient.movie.update(props);
  }
}
