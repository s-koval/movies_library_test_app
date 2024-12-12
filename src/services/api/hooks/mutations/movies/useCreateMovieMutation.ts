import { useMutation, useQueryClient } from "@tanstack/react-query";

import createMovieMutation from "@core/services/api/handlers/mutations/movies/createMovieMutation";

import { TApiOptions } from "@core/types/services/api";

import { QUERY_KEY as FETCH_MOVIES_QUERY_KEY } from "../../queries/movies/useFetchMoviesQuery";

const MUTATION_KEY = "useCreateMovieMutation";

export const useCreateMovieMutation = (options?: TApiOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [MUTATION_KEY],
    mutationFn: createMovieMutation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [FETCH_MOVIES_QUERY_KEY] });

      options?.onSuccess?.();
    },
    onError: options?.onError,
  });
};
