"use client";

import { FC, InputHTMLAttributes, useId } from "react";

import Styled from "./styled";

type TInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Input: FC<TInputProps> = ({ label = "Label", value, ...rest }) => {
  const id = useId();

  return (
    <Styled.Input.Wrapper>
      <Styled.Input {...rest} id={id} value={value} />
      <Styled.Input.Label htmlFor={id}>{label}</Styled.Input.Label>
    </Styled.Input.Wrapper>
  );
};

export default Input;
