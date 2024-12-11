import { useMutation } from "@tanstack/react-query";

import loginMutation from "@core/api/handlers/auth/loginMutation";

import { TApiOptions } from "@core/types/api";

const MUTATION_KEY = "useLoginMutation";

export const useLoginMutation = (options?: TApiOptions) => {
  return useMutation({
    mutationFn: loginMutation,
    mutationKey: [MUTATION_KEY],
    onSuccess: options?.onSuccess,
    onError: options?.onError,
  });
};
