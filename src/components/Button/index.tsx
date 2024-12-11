"use client";

import { ButtonHTMLAttributes, FC } from "react";

import { TButtonStylesProps } from "@core/types/components/Button";

import Styled from "./styled";

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<TButtonStylesProps>;

const Button: FC<TButtonProps> = ({
  color = "primary",
  variant = "contained",
  brightness = 400,
  ...rest
}) => (
  <Styled.Button
    {...rest}
    $color={color}
    $variant={variant}
    $brightness={brightness}
  />
);

export default Button;
