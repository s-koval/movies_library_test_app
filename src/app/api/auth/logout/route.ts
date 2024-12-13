import { NextResponse } from "next/server";

import authGuard from "@core/guards/auth";

import { errorMiddleware } from "@core/middlewares/error";

const POST = async () => {
  const response = new NextResponse();

  response.cookies.delete("accessToken");
  response.cookies.delete("refreshToken");

  return response;
};

const wrappedPOST = errorMiddleware(authGuard(POST));

export { wrappedPOST as POST };
