import { AxiosError } from "axios";

type TApiError = {
  message: string;
  status: number;
};

export type TApiOptions<S = void, E = TApiError> = {
  onSuccess?: (data: S) => void;
  onError?: (err: AxiosError<E>) => void;
};
