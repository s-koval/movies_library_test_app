"use client";

import { FC, InputHTMLAttributes, useId } from "react";
import Styled from "./styled";

type TInputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<TInputProps> = ({ ...rest }) => {
  const id = useId();

  return (
    <Styled.Input.Wrapper>
      <Styled.Input.Label htmlFor={id}>My label</Styled.Input.Label>
      <Styled.Input {...rest} id={id} />
    </Styled.Input.Wrapper>
  );
};

export default Input;
