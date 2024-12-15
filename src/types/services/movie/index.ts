import { Movies, Prisma } from "@prisma/client";

export type TMovie = Movies;

export type TMoviesCreateProps = Prisma.MoviesCreateArgs;
export type TMoviesFindByProps = Prisma.MoviesFindFirstArgs;
export type TMoviesFindManyProps = Prisma.MoviesFindManyArgs;
export type TMoviesUpdateProps = Prisma.MoviesUpdateArgs;
export type TMoviesCountProps = Prisma.MoviesCountArgs;
