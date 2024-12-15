import {
  TMovie,
  TMoviesCountProps,
  TMoviesCreateProps,
  TMoviesFindByProps,
  TMoviesFindManyProps,
  TMoviesUpdateProps,
} from "@core/types/services/movie";

import { IMovieService } from "@core/interfaces/services/movie";

import prismaClient from "../db";

export class MovieService implements IMovieService {
  async create(props: TMoviesCreateProps): Promise<void> {
    await prismaClient.movies.create(props);
  }

  async findFirst(props: TMoviesFindByProps): Promise<TMovie | null> {
    return await prismaClient.movies.findFirst(props);
  }

  async findMany(props: TMoviesFindManyProps): Promise<TMovie[]> {
    return await prismaClient.movies.findMany(props);
  }

  async update(props: TMoviesUpdateProps): Promise<void> {
    await prismaClient.movies.update(props);
  }

  async count(props: TMoviesCountProps): Promise<number> {
    return await prismaClient.movies.count(props);
  }
}
