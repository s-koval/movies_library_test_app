"use client";

import { ButtonHTMLAttributes, FC } from "react";

import Styled from "./styled";

type TIconButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton: FC<TIconButtonProps> = ({ children, ...rest }) => {
  return <Styled.IconButton {...rest}>{children}</Styled.IconButton>;
};

export default IconButton;
