"use client";

import { FC } from "react";

import LoginForm from "../LoginForm";

import Styled from "./styled";

const LoginContent: FC = () => (
  <Styled.Wrapper>
    <LoginForm />
  </Styled.Wrapper>
);

export default LoginContent;
