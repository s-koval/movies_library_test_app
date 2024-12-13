import { useMutation, useQueryClient } from "@tanstack/react-query";

import updateMovieMutation from "@core/services/api/handlers/mutations/movies/updateMovieMutation";

import { TApiOptions } from "@core/types/services/api";
import { TUpdateMovieData } from "@core/types/services/api/movie";

import { QUERY_KEY as FETCH_MOVIES_QUERY_KEY } from "../../queries/movies/useFetchMoviesQuery";

const MUTATION_KEY = "useUpdateMovieMutation";

export const useUpdateMovieMutation = (id: string, options?: TApiOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [MUTATION_KEY],
    mutationFn: (data: TUpdateMovieData) => updateMovieMutation(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [FETCH_MOVIES_QUERY_KEY] });

      options?.onSuccess?.();
    },
    onError: options?.onError,
  });
};
