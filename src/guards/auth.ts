import { JwtNotFound } from "@core/exceptions/jwt";

import { JwtService } from "@core/services/jwt";

import { TAuthRequest, TDynamicSegments, TNextHandler } from "@core/types/api";
import { TUserJwtPayload } from "@core/types/services/user";

const jwtService = new JwtService();

const authGuard = (handler: TNextHandler) => {
  return async (req: TAuthRequest, segments: TDynamicSegments) => {
    const token = req.cookies.get("accessToken");

    if (!token) {
      throw new JwtNotFound();
    }

    const { payload } = await jwtService.verify<TUserJwtPayload>(token.value);

    req.user = {
      id: payload.id,
    };

    return await handler(req, segments);
  };
};

export default authGuard;
