import { TApiError, TFailedRequest } from "@core/types/services/api";

import api from "..";
import refreshTokensMutation from "../handlers/mutations/auth/refreshTokensMutation";

export class ApiResponseIntercetor {
  private isFetching = false;
  private failedRequests: TFailedRequest[] = [];

  private processQueue(error: unknown) {
    this.failedRequests.forEach((prom) => {
      if (error) {
        prom.reject(error);
      } else {
        prom.resolve();
      }
    });

    this.failedRequests = [];
  }

  public async hanldeError(err: unknown) {
    if (err) {
      const requestError = err as unknown as TApiError;

      const originalRequest = requestError.config;

      if (requestError.response?.status === 401 && !originalRequest?._retry) {
        if (this.isFetching) {
          return new Promise((resolve, reject) => {
            this.failedRequests.push({ resolve, reject });
          })
            .then(() => {
              return api(originalRequest);
            })
            .catch((err) => {
              return Promise.reject(err);
            });
        }

        originalRequest._retry = true;
        this.isFetching = true;

        return new Promise((resolve, reject) => {
          refreshTokensMutation()
            .then(() => {
              this.processQueue(null);
              resolve(api(originalRequest));
            })
            .catch((err) => {
              this.processQueue(err);
              reject(err);
            })
            .finally(() => {
              this.isFetching = false;
            });
        });
      }
    }

    return Promise.reject(err);
  }
}
