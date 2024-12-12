import { useQuery } from "@tanstack/react-query";

import fetchMoviesQuery from "@core/services/api/handlers/queries/movies/fetchMoviesQuery";

export const QUERY_KEY = "useFetchMoviesQuery";

export const useFetchMoviesQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEY],
    queryFn: fetchMoviesQuery,
  });
};
