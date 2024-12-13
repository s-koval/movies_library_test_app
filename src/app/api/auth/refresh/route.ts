import { NextRequest, NextResponse } from "next/server";

import { UnauthorizedError } from "@core/exceptions/auth";

import { AuthService } from "@core/services/auth";

import { errorMiddleware } from "@core/middlewares/error";

import {
  ACCESS_TOKEN_DEFAULT_EXPIRY,
  REFRESH_TOKEN_DEFAULT_EXPIRY,
} from "@core/constants/services/auth";

const authService = new AuthService();

const POST = async (req: NextRequest) => {
  const token = req.cookies.get("refreshToken");

  if (!token) {
    throw new UnauthorizedError();
  }

  const { accessToken, refreshToken } = await authService.refreshTokens(
    token.value
  );

  const response = NextResponse.json({}, { status: 200 });

  response.cookies.set("refreshToken", refreshToken, {
    maxAge: REFRESH_TOKEN_DEFAULT_EXPIRY,
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });

  response.cookies.set("accessToken", accessToken, {
    maxAge: ACCESS_TOKEN_DEFAULT_EXPIRY,
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });

  return response;
};

const wrappedPOST = errorMiddleware(POST);

export { wrappedPOST as POST };
