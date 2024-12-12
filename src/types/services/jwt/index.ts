import { JWTPayload } from "jose";

export type TJwtPayload = Exclude<JWTPayload, "exp"> & {
  exp: number;
};
