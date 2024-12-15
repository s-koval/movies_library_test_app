import { useQuery } from "@tanstack/react-query";

import fetchMoviesQuery from "@core/services/api/handlers/queries/movies/fetchMoviesQuery";

import { TUseFetchMoviesQueryProps } from "@core/types/services/api/movie";

export const QUERY_KEY = "useFetchMoviesQuery";

export const useFetchMoviesQuery = (props: TUseFetchMoviesQueryProps = {}) => {
  return useQuery({
    queryKey: [QUERY_KEY, ...Object.values(props)],
    queryFn: () => fetchMoviesQuery(props),
    retry: false,
  });
};
