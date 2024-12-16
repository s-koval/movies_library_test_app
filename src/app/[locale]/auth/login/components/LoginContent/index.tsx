"use client";

import { FC } from "react";

import dynamic from "next/dynamic";

import Styled from "./styled";

const LoginForm = dynamic(() => import("../LoginForm"), { ssr: false });

const LoginContent: FC = () => (
  <Styled.Wrapper>
    <LoginForm />
  </Styled.Wrapper>
);

export default LoginContent;
