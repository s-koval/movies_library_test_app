import { Movie, Prisma } from "@prisma/client";

export type TMovie = Movie;

export type TMovieCreateProps = Prisma.MovieCreateArgs;
export type TMovieFindByProps = Prisma.MovieFindFirstArgs;
export type TMovieFindManyProps = Prisma.MovieFindManyArgs;
export type TMovieUpdateProps = Prisma.MovieUpdateArgs;
export type TMovieCountProps = Prisma.MovieCountArgs;
