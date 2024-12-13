import { i18nRouter } from "next-i18n-router";

import { NextRequest, NextResponse } from "next/server";

import i18nConfig from "@core/configs/i18n";

import refreshTokensMutation from "./services/api/handlers/mutations/auth/refreshTokensMutation";
import { JwtService } from "./services/jwt";

const jwtService = new JwtService();

export const middleware = async (req: NextRequest) => {
  const isMissingLocale = i18nConfig.locales.every(
    (locale) =>
      !req.nextUrl.pathname.startsWith(`/${locale}/`) &&
      req.nextUrl.pathname !== `/${locale}`
  );

  if (isMissingLocale) {
    return i18nRouter(req, i18nConfig);
  }

  const locale = req.nextUrl.pathname.split("/")[1];

  const isAuth = i18nConfig.locales.some((locale) =>
    req.nextUrl.pathname.startsWith(`/${locale}/auth/`)
  );

  const accessToken = req.cookies.get("accessToken");

  if (isAuth) {
    if (accessToken) {
      return NextResponse.redirect(new URL(`/${locale}`, req.nextUrl));
    } else {
      return NextResponse.next();
    }
  }
  try {
    if (!accessToken) {
      return NextResponse.redirect(
        new URL(`/${locale}/auth/login`, req.nextUrl)
      );
    } else {
      await jwtService.verify(accessToken.value);

      return NextResponse.next();
    }
  } catch {
    try {
      await refreshTokensMutation(req.cookies.toString());

      return NextResponse.next();
    } catch {
      const response = NextResponse.redirect(
        new URL(`/${locale}/auth/login`, req.nextUrl)
      );

      response.cookies.delete("accessToken");
      response.cookies.delete("refreshToken");

      return response;
    }
  }
};

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
