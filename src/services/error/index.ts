import { InvalidEmailOrPasswordError } from "@core/exceptions/auth";
import { TProcessErrorReturnType } from "@core/types/services/error";
import { ValidationError } from "yup";

export class ErrorService {
  process(err: unknown): TProcessErrorReturnType {
    console.log(err);

    if (err instanceof ValidationError) {
      return {
        message: err.errors.join(", "),
        status: 422,
      };
    }

    if (err instanceof InvalidEmailOrPasswordError) {
      return {
        message: err.message,
        status: 403,
      };
    }

    return {
      message: "Something went wrong",
      status: 500,
    };
  }
}
