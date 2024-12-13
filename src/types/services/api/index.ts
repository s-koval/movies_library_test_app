import { AxiosError, AxiosRequestConfig } from "axios";

type TApiErrorData = {
  message: string;
  status: number;
};

export type TApiOptions<S = void, E = TApiErrorData> = {
  onSuccess?: (data: S) => void;
  onError?: (err: AxiosError<E>) => void;
};

export type TFailedRequest = {
  resolve: <V = unknown>(value?: V) => void;
  reject: <R = unknown>(reason?: R) => void;
};

export type TApiError = AxiosError & {
  config: AxiosRequestConfig & { _retry?: boolean };
};
