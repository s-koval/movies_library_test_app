import { ValidationError } from "yup";

import { JWTExpired } from "jose/errors";
import { NextResponse } from "next/server";

import { UnauthorizedError } from "@core/exceptions/auth";
import { JwtNotFound } from "@core/exceptions/jwt";
import { MovieNotFoundError } from "@core/exceptions/movies";

import { InvalidEmailOrPasswordError } from "../exceptions/auth/invalid-email-or-password";
import { TAuthRequest, TDynamicSegments, TNextHandler } from "../types/api";

export const errorMiddleware = (handler: TNextHandler) => {
  return async (req: TAuthRequest, segments: TDynamicSegments) => {
    try {
      return await handler(req, segments);
    } catch (err) {
      console.log(err);

      let message = "somethingWentWrong";
      let status = 500;

      if (err instanceof ValidationError) {
        message = "validationError";
        status = 422;
      }

      if (err instanceof InvalidEmailOrPasswordError) {
        message = "auth.invalidCreadentials";
        status = 403;
      }

      if (err instanceof MovieNotFoundError) {
        message = "movie.notFound";
        status = 404;
      }

      if (
        err instanceof JwtNotFound ||
        err instanceof UnauthorizedError ||
        err instanceof JWTExpired
      ) {
        message = "auth.unauthorized";
        status = 401;
      }

      return NextResponse.json({ message }, { status });
    }
  };
};
