import { JWTPayload, JWTVerifyResult } from "jose";

export type TJwtPayload = Exclude<JWTPayload, "exp"> & {
  exp: number;
};

export type TJwtVerifyResult<T> = JWTVerifyResult<T>;
