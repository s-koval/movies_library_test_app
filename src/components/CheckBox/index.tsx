"use client";

import React, { FC, InputHTMLAttributes } from "react";

import CheckBoxChecked from "@core/icons/CheckBoxChecked";
import CheckBoxUnchecked from "@core/icons/CheckBoxUnchecked";

import Typography from "../Typography";

import Styled from "./styled";

type TCheckBoxProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const CheckBox: FC<TCheckBoxProps> = ({
  label = "Label",
  checked,
  ...rest
}) => {
  return (
    <Styled.CheckBox.Label>
      <Styled.CheckBox {...rest} type="checkbox" checked={checked} />
      {checked ? (
        <CheckBoxChecked color="primary" size={18} />
      ) : (
        <CheckBoxUnchecked color="secondary" size={18} />
      )}
      <Typography brightness={0}>{label}</Typography>
    </Styled.CheckBox.Label>
  );
};

export default CheckBox;
