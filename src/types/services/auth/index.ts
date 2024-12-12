// Functions props

export type TLoginProps = {
  email: string;
  password: string;
  rememberMe: boolean;
};

// Functions return types

export type TGenerateTokensReturnType = {
  accessToken: string;
  refreshToken: string;
};

export type TLoginReturnType = TGenerateTokensReturnType;
