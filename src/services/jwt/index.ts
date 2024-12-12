import { IJwtService } from "@core/interfaces/services/jwt";
import { TJwtPayload, TJwtVerifyResult } from "@core/types/services/jwt";
import { SignJWT, jwtVerify } from "jose";

export class JwtService implements IJwtService {
  private readonly jwtSecret: Uint8Array;

  constructor() {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    if (!secret) {
      throw new Error("Invalid secret key");
    }

    this.jwtSecret = secret;
  }

  async generateToken(payload: TJwtPayload): Promise<string> {
    return await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .sign(this.jwtSecret);
  }

  async verify<T>(token: string): Promise<TJwtVerifyResult<T>> {
    return await jwtVerify<T>(token, this.jwtSecret);
  }

  getExpirationTime(time: number) {
    return Math.floor(Date.now() / 1000) + time;
  }
}
