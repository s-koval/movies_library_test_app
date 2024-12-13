"use client";

import { FC, PropsWithChildren } from "react";

import Styled from "./styled";

const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};

export default DefaultLayout;
