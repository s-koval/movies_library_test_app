"use client";

import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation("movies");

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

  const onMovieClick = useCallback(
    (id: string) => {
      router.push(`/${params.locale}/movies/edit/${id}`);
    },
    [params, router]
  );

  if (isLoading) {
    return <div>{t("loading")}</div>;
  }

  if (!data?.total) {
    return <MovieListEmpty />;
  }

  return (
    <>
      <Styled.Wrapper>
        {data.movies?.map((m) => (
          <MovieCard movie={m} key={m.id} onClick={onMovieClick} />
        ))}
      </Styled.Wrapper>
      {!!data && (
        <Pagination
          page={page}
          total={data.total}
          perPage={DEFAULT_MOVIES_TAKE}
          onChange={onPageChange}
          labels={{
            next: t("actions.next"),
            prev: t("actions.prev"),
          }}
        />
      )}
    </>
  );
};

export default MovieList;
