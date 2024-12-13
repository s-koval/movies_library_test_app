import { useMutation } from "@tanstack/react-query";

import logoutMutation from "@core/services/api/handlers/mutations/auth/logoutMutation";

import { TApiOptions } from "@core/types/services/api";

const MUTATION_KEY = "useLogoutMutation";

export const useLogoutMutation = (options?: TApiOptions) => {
  return useMutation({
    mutationFn: logoutMutation,
    mutationKey: [MUTATION_KEY],
    onSuccess: options?.onSuccess,
    onError: options?.onError,
  });
};
