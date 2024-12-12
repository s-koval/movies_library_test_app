import * as yup from "yup";

import { NextRequest, NextResponse } from "next/server";

import loginSchema from "@core/validation/auth/loginSchema";
import { AuthService } from "@core/services/auth";
import {
  ACCESS_TOKEN_DEFAULT_EXPIRY,
  REFRESH_TOKEN_DEFAULT_EXPIRY,
} from "@core/constants/services/auth";

const IS_PRODUCTION = process.env.NODE_ENV === "production";

const authService = new AuthService();

export async function POST(req: NextRequest) {
  try {
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
  } catch (err) {
    console.log(err);

    if (err instanceof yup.ValidationError) {
      return NextResponse.json(
        { message: err.errors.join(", ") },
        { status: 422 }
      );
    }

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
