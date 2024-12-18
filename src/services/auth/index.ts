import { NextResponse } from "next/server";

import {
  InvalidEmailOrPasswordError,
  UnauthorizedError,
} from "@core/exceptions/auth";

import {
  ACCESS_TOKEN_DEFAULT_EXPIRY,
  REFRESH_TOKEN_DEFAULT_EXPIRY,
} from "@core/constants/services/auth";

import {
  TGenerateTokensReturnType,
  TLoginProps,
  TLoginReturnType,
  TRefreshTokensReturnType,
} from "@core/types/services/auth";
import { TUserJwtPayload } from "@core/types/services/user";

import { IAuthService } from "@core/interfaces/services/auth";

import { HashService } from "../hash";
import { JwtService } from "../jwt";
import { UserService } from "../user";

import { TGenerateResponseProps } from "./../../types/services/auth/index";

export class AuthService implements IAuthService {
  private readonly userService = new UserService();
  private readonly jwtService = new JwtService();
  private readonly hashService = new HashService();

  async login(props: TLoginProps): Promise<TLoginReturnType> {
    const user = await this.userService.findFirst({
      where: {
        email: props.email,
      },
      select: {
        password: true,
        id: true,
      },
    });

    if (!user) {
      throw new InvalidEmailOrPasswordError();
    }

    const isValidPassword = await this.hashService.compare({
      value: props.password,
      hash: user.password,
    });

    if (!isValidPassword) {
      throw new InvalidEmailOrPasswordError();
    }

    return await this.generateTokens(
      { id: user.id },
      props.rememberMe
        ? REFRESH_TOKEN_DEFAULT_EXPIRY * 7
        : REFRESH_TOKEN_DEFAULT_EXPIRY
    );
  }

  async refreshTokens(token: string): Promise<TRefreshTokensReturnType> {
    const { payload } = await this.jwtService.verify<TUserJwtPayload>(token);

    const user = await this.userService.findFirst({
      where: { id: payload.id },
      select: null,
    });

    if (!user) {
      throw new UnauthorizedError();
    }

    return await this.generateTokens({ id: payload.id });
  }

  async generateTokens(
    payload: TUserJwtPayload,
    refreshTTL: number = REFRESH_TOKEN_DEFAULT_EXPIRY
  ): Promise<TGenerateTokensReturnType> {
    const accessExpiry = this.jwtService.getExpirationTime(
      ACCESS_TOKEN_DEFAULT_EXPIRY
    );
    const refreshExpiry = this.jwtService.getExpirationTime(refreshTTL);

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.generateToken({
        ...payload,
        exp: accessExpiry,
      }),
      this.jwtService.generateToken({
        ...payload,
        exp: refreshExpiry,
      }),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  generateResponse(
    tokens: TGenerateResponseProps,
    rememberMe: boolean = false
  ): NextResponse {
    const response = NextResponse.json({});

    response.cookies.set("refreshToken", tokens.refreshToken, {
      maxAge: rememberMe
        ? REFRESH_TOKEN_DEFAULT_EXPIRY * 7
        : REFRESH_TOKEN_DEFAULT_EXPIRY,
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });

    response.cookies.set("accessToken", tokens.accessToken, {
      maxAge: ACCESS_TOKEN_DEFAULT_EXPIRY,
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });

    return response;
  }
}
