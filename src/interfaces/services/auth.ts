import {
  TGenerateTokensReturnType,
  TLoginProps,
  TLoginReturnType,
  TRefreshTokensReturnType,
} from "@core/types/services/auth";
import { TUserJwtPayload } from "@core/types/services/user";

export interface IAuthService {
  login(props: TLoginProps): Promise<TLoginReturnType>;
  refreshTokens(token: string): Promise<TRefreshTokensReturnType>;
  generateTokens(payload: TUserJwtPayload): Promise<TGenerateTokensReturnType>;
}
