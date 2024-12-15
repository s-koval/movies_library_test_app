import {
  TMovie,
  TMovieCountProps,
  TMovieCreateProps,
  TMovieFindByProps,
  TMovieFindManyProps,
  TMovieUpdateProps,
} from "@core/types/services/movie";

import { IMovieService } from "@core/interfaces/services/movie";

import prismaClient from "../db";

export class MovieService implements IMovieService {
  async create(props: TMovieCreateProps): Promise<void> {
    await prismaClient.movies.create(props);
  }

  async findFirst(props: TMovieFindByProps): Promise<TMovie | null> {
    return await prismaClient.movies.findFirst(props);
  }

  async findMany(props: TMovieFindManyProps): Promise<TMovie[]> {
    return await prismaClient.movies.findMany(props);
  }

  async update(props: TMovieUpdateProps): Promise<void> {
    await prismaClient.movies.update(props);
  }

  async count(props: TMovieCountProps): Promise<number> {
    return await prismaClient.movies.count(props);
  }
}
