export type TLoginProps = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type TGenerateTokensReturnType = {
  accessToken: string;
  refreshToken: string;
};

export type TLoginReturnType = TGenerateTokensReturnType;

export type TRefreshTokensReturnType = TGenerateTokensReturnType;

export type TGenerateResponseProps = TGenerateTokensReturnType;
