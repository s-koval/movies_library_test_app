import { TJwtPayload, TJwtVerifyResult } from "@core/types/services/jwt";

export interface IJwtService {
  generateToken(payload: TJwtPayload): Promise<string>;
  verify<T>(token: string): Promise<TJwtVerifyResult<T>>;
  getExpirationTime(time: number): number;
}
