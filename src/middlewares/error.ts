import { ValidationError } from "yup";

import { JWTExpired } from "jose/errors";
import { NextResponse } from "next/server";

import { UnauthorizedError } from "@core/exceptions/auth";
import { JwtNotFound } from "@core/exceptions/jwt";

import { InvalidEmailOrPasswordError } from "../exceptions/auth/invalid-email-or-password";
import { TAuthRequest, TNextHandler } from "../types/api";

export const errorMiddleware = (handler: TNextHandler) => {
  return async (req: TAuthRequest) => {
    try {
      return await handler(req);
    } catch (err) {
      console.log(err);

      let message = "Something went wrong";
      let status = 500;

      if (err instanceof ValidationError) {
        message = err.errors.join(", ");
        status = 422;
      }

      if (err instanceof InvalidEmailOrPasswordError) {
        message = err.message;
        status = 403;
      }

      if (
        err instanceof JwtNotFound ||
        err instanceof UnauthorizedError ||
        err instanceof JWTExpired
      ) {
        message = "Unauthorized";
        status = 401;
      }

      return NextResponse.json({ message }, { status });
    }
  };
};
