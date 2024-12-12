import { NextRequest, NextResponse } from "next/server";

import loginSchema from "@core/validation/auth/loginSchema";
import { AuthService } from "@core/services/auth";
import {
  ACCESS_TOKEN_DEFAULT_EXPIRY,
  REFRESH_TOKEN_DEFAULT_EXPIRY,
} from "@core/constants/services/auth";
import { errorMiddleware } from "@core/middlewares/error";

const IS_PRODUCTION = process.env.NODE_ENV === "production";

const authService = new AuthService();

const POST = async (req: NextRequest) => {
  const body = await req.json();

  const dto = await loginSchema.validate(body, {
    stripUnknown: true,
  });

  const { accessToken, refreshToken } = await authService.login(dto);

  const response = NextResponse.json({}, { status: 200 });

  response.cookies.set("refreshToken", refreshToken, {
    maxAge: dto.rememberMe
      ? REFRESH_TOKEN_DEFAULT_EXPIRY * 7
      : REFRESH_TOKEN_DEFAULT_EXPIRY,
    httpOnly: true,
    secure: IS_PRODUCTION,
    sameSite: "strict",
    path: "/",
  });

  response.cookies.set("accessToken", accessToken, {
    maxAge: ACCESS_TOKEN_DEFAULT_EXPIRY,
    httpOnly: true,
    secure: IS_PRODUCTION,
    sameSite: "strict",
    path: "/",
  });

  return response;
};

const wrappedPOST = errorMiddleware(POST);

export { wrappedPOST as POST };
