import { useQuery } from "@tanstack/react-query";

import fetchMovieQuery from "@core/services/api/handlers/queries/movies/fetchMovieQuery";

export const QUERY_KEY = "useFetchMovieQuery";

export const useFetchMovieQuery = (id: string) => {
  return useQuery({
    queryKey: [QUERY_KEY, id],
    queryFn: () => fetchMovieQuery(id),
    enabled: !!id,
    retry: false,
  });
};
