import { IAuthService } from "@core/interfaces/services/auth";
import {
  TGenerateTokensReturnType,
  TLoginProps,
  TLoginReturnType,
} from "@core/types/services/auth";
import { UserService } from "../user";
import { InvalidEmailOrPasswordError } from "@core/exceptions/auth";
import { JwtService } from "../jwt";
import {
  ACCESS_TOKEN_DEFAULT_EXPIRY,
  REFRESH_TOKEN_DEFAULT_EXPIRY,
} from "@core/constants/services/auth";
import { HashService } from "../hash";

export class AuthService implements IAuthService {
  private readonly userService = new UserService();
  private readonly jwtService = new JwtService();
  private readonly hashService = new HashService();

  async login(props: TLoginProps): Promise<TLoginReturnType> {
    const user = await this.userService.findBy({
      where: {
        email: props.email,
      },
      select: {
        password: true,
        email: true,
      },
    });

    if (!user) {
      throw new InvalidEmailOrPasswordError();
    }

    const isValidPassword = await this.hashService.compare({
      value: props.password,
      hash: user.password,
    });

    if (!isValidPassword) {
      throw new InvalidEmailOrPasswordError();
    }

    return await this.generateTokens(
      user,
      props.rememberMe
        ? REFRESH_TOKEN_DEFAULT_EXPIRY * 7
        : REFRESH_TOKEN_DEFAULT_EXPIRY
    );
  }

  async generateTokens<T extends object>(
    payload: T,
    refreshTTL: number = REFRESH_TOKEN_DEFAULT_EXPIRY
  ): Promise<TGenerateTokensReturnType> {
    const accessExpiry = this.jwtService.getExpirationTime(
      ACCESS_TOKEN_DEFAULT_EXPIRY
    );
    const refreshExpiry = this.jwtService.getExpirationTime(refreshTTL);

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.generateToken({
        ...payload,
        exp: accessExpiry,
      }),
      this.jwtService.generateToken({
        ...payload,
        exp: refreshExpiry,
      }),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }
}
