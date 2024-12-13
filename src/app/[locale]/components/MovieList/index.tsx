"use client";

import { FC } from "react";

import { useParams, useRouter, useSearchParams } from "next/navigation";

import Pagination from "@core/components/Pagination";

import { useFetchMoviesQuery } from "@core/services/api/hooks/queries/movies/useFetchMoviesQuery";

import {
  DEFAULT_MOVIES_PAGE,
  DEFAULT_MOVIES_TAKE,
} from "@core/constants/api/movies";

import MovieCard from "../MovieCard";
import MovieListEmpty from "../MovieListEmpty";

import Styled from "./styled";


const MovieList: FC = () => {
  const search = useSearchParams();
  const params = useParams();
  const router = useRouter();

  const page = parseInt(search.get("page") || `${DEFAULT_MOVIES_PAGE}`);

  const { data, isLoading } = useFetchMoviesQuery({
    page,
  });

  const onPageChange = (pageIdx: number) => {
    if (pageIdx === page) {
      return;
    }

    router.push(`/${params.locale}?page=${pageIdx}`);
  };

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!data?.total) {
    return <MovieListEmpty />;
  }

  return (
    <>
      <Styled.Wrapper>
        {data.movies?.map((m) => (
          <MovieCard movie={m} key={m.id} />
        ))}
      </Styled.Wrapper>
      {!!data && (
        <Pagination
          page={page}
          total={data.total}
          perPage={DEFAULT_MOVIES_TAKE}
          onChange={onPageChange}
        />
      )}
    </>
  );
};

export default MovieList;
