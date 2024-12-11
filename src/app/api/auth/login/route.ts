import * as bcrypt from "bcrypt";
import * as jwt from "jose";
import * as yup from "yup";

import { NextRequest, NextResponse } from "next/server";

import prismaClient from "@core/db";
import loginSchema from "@core/validation/auth/loginSchema";

const IS_PRODUCTION = process.env.NODE_ENV === "production";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const dto = await loginSchema.validate(body, {
      stripUnknown: true,
    });

    const user = await prismaClient.user.findFirst({
      where: {
        email: dto.email,
      },
      select: {
        password: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password", status: 401 },
        { status: 401 }
      );
    }

    const isValidPassword = await bcrypt.compare(dto.password, user.password);

    if (!isValidPassword) {
      return NextResponse.json(
        { message: "Invalid email or password", status: 401 },
        { status: 401 }
      );
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    if (!secret) {
      return NextResponse.json(
        { message: "Something went wrong", status: 500 },
        { status: 500 }
      );
    }

    const refreshExpiry = dto.rememberMe ? 60 * 60 * 24 * 7 : 60 * 60 * 24;
    const accessExpiry = 60 * 15;

    const accessToken = await new jwt.SignJWT({ email: dto.email })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime(Math.floor(Date.now() / 1000) + accessExpiry)
      .sign(secret);
    const refreshToken = await new jwt.SignJWT({ email: dto.email })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime(Math.floor(Date.now() / 1000) + refreshExpiry)
      .sign(secret);

    const response = NextResponse.json({ status: 200 }, { status: 200 });

    response.cookies.set("refreshToken", refreshToken, {
      maxAge: refreshExpiry,
      httpOnly: true,
      secure: IS_PRODUCTION,
      sameSite: "strict",
      path: "/",
    });

    response.cookies.set("accessToken", accessToken, {
      maxAge: accessExpiry,
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
        { message: err.errors.join(", "), status: 400 },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Something went wrong", status: 500 },
      { status: 500 }
    );
  }
}
