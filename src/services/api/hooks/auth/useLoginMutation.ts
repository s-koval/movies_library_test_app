import { useMutation } from "@tanstack/react-query";

import loginMutation from "@core/services/api/handlers/auth/loginMutation";

import { TApiOptions } from "@core/types/services/api";

const MUTATION_KEY = "useLoginMutation";

export const useLoginMutation = (options?: TApiOptions) => {
  return useMutation({
    mutationFn: loginMutation,
    mutationKey: [MUTATION_KEY],
    onSuccess: options?.onSuccess,
    onError: options?.onError,
  });
};
