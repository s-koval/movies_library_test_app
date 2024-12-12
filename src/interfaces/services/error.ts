import { TProcessErrorReturnType } from "@core/types/services/error";

export interface IErrorService {
  process(err: unknown): TProcessErrorReturnType;
}
