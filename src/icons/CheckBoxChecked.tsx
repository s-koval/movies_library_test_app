"use client";

import { FC } from "react";

import { TIconProps } from "@core/types/icons";

import Styled from "./styled";

const CheckBoxChecked: FC<TIconProps> = ({
  className,
  color = "neutral",
  size = 16,
}) => {
  return (
    <Styled.SVG
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      $hasFill
      color={color}
      className={className}
    >
      <g clipPath="url(#clip0_153_2)">
        <path d="M17.5 0H2.5C1.125 0 0 1.125 0 2.5V17.5C0 18.875 1.125 20 2.5 20H17.5C18.875 20 20 18.875 20 17.5V2.5C20 1.125 18.875 0 17.5 0ZM8.75 15.5175L4.11625 10.8837L5.88375 9.11625L8.75 11.9825L14.7413 5.99125L16.5087 7.75875L8.75 15.5175Z" />
      </g>
      <defs>
        <clipPath id="clip0_153_2">
          <rect width="20" height="20" rx="5" />
        </clipPath>
      </defs>
    </Styled.SVG>
  );
};

export default CheckBoxChecked;
