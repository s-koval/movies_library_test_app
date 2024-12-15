import { NextRequest } from "next/server";

import { UnauthorizedError } from "@core/exceptions/auth";

import { AuthService } from "@core/services/auth";

import { errorMiddleware } from "@core/middlewares/error";

const authService = new AuthService();

const POST = async (req: NextRequest) => {
  const token = req.cookies.get("refreshToken");

  if (!token) {
    throw new UnauthorizedError();
  }

  const tokens = await authService.refreshTokens(token.value);

  return authService.generateResponse(tokens);
};

const wrappedPOST = errorMiddleware(POST);

export { wrappedPOST as POST };
