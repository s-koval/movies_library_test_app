import * as jwt from "jose";
import { i18nRouter } from "next-i18n-router";

import { NextRequest, NextResponse } from "next/server";

import i18nConfig from "@core/configs/i18n";


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

  const isPublic = i18nConfig.locales.some((locale) =>
    req.nextUrl.pathname.startsWith(`/${locale}/auth/`)
  );

  if (isPublic) {
    return NextResponse.next();
  }

  const accessToken = req.cookies.get("accessToken");

  try {
    if (!accessToken) {
      return NextResponse.redirect(
        new URL(`/${locale}/auth/login`, req.nextUrl)
      );
    } else {
      await jwt.jwtVerify(
        accessToken.value,
        new TextEncoder().encode(process.env.JWT_SECRET || "")
      );

      return NextResponse.next();
    }
  } catch (err) {
    console.log(err, "<<< err");

    return NextResponse.redirect(new URL(`/${locale}/auth/login`, req.nextUrl));
  }
};

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
