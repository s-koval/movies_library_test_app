"use client";

import { FC } from "react";

import { useFetchMoviesQuery } from "@core/services/api/hooks/queries/movies/useFetchMoviesQuery";


import MovieCard from "../MovieCard";
import MovieListEmpty from "../MovieListEmpty";

import Styled from "./styled";

const MovieList: FC = () => {
  const { data, isLoading } = useFetchMoviesQuery();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!data?.total) {
    return <MovieListEmpty />;
  }

  return (
    <Styled.Wrapper>
      {data?.movies.map((m) => (
        <MovieCard movie={m} key={m.id} />
      ))}
    </Styled.Wrapper>
  );
};

export default MovieList;
