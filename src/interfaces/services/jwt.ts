import { TJwtPayload } from "@core/types/services/jwt";

export interface IJwtService {
  generateToken(payload: TJwtPayload): Promise<string>;
  getExpirationTime(time: number): number;
}
