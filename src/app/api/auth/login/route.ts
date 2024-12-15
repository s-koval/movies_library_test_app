import { NextRequest } from "next/server";

import loginSchema from "@core/validation/auth/loginSchema";

import { AuthService } from "@core/services/auth";

import { errorMiddleware } from "@core/middlewares/error";

const authService = new AuthService();

const POST = async (req: NextRequest) => {
  const body = await req.json();

  const dto = await loginSchema.validate(body, {
    stripUnknown: true,
  });

  const tokens = await authService.login(dto);

  return authService.generateResponse(tokens, dto.rememberMe);
};

const wrappedPOST = errorMiddleware(POST);

export { wrappedPOST as POST };
