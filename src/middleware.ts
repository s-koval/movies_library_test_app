import { i18nRouter } from "next-i18n-router";
import { NextRequest } from "next/server";
import i18nConfig from "@core/configs/i18n";

export const middleware = (req: NextRequest) => {
  const response = i18nRouter(req, i18nConfig);

  return response;
};

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
