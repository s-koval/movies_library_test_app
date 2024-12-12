import {
  TGenerateTokensReturnType,
  TLoginProps,
  TLoginReturnType,
} from "@core/types/services/auth";
import { TUserJwtPayload } from "@core/types/services/user";

export interface IAuthService {
  login(props: TLoginProps): Promise<TLoginReturnType>;
  generateTokens(payload: TUserJwtPayload): Promise<TGenerateTokensReturnType>;
}
