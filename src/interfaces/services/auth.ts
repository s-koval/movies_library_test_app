import {
  TGenerateTokensReturnType,
  TLoginProps,
  TLoginReturnType,
} from "@core/types/services/auth";

export interface IAuthService {
  login(props: TLoginProps): Promise<TLoginReturnType>;
  generateTokens<T extends object>(
    payload: T
  ): Promise<TGenerateTokensReturnType>;
}
