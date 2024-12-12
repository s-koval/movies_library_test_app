import React, { FC } from "react";

import { TIconProps } from "@core/types/icons";

import Styled from "./styled";

const LogoutIcon: FC<TIconProps> = ({
  className,
  color = "neutral",
  size = 16,
}) => {
  return (
    <Styled.SVG
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      $hasFill
      color={color}
      className={className}
    >
      <g clipPath="url(#clip0_7_232)">
        <path d="M22.6667 10.6667L20.7867 12.5467L22.8933 14.6667H12V17.3333H22.8933L20.7867 19.44L22.6667 21.3333L28 16L22.6667 10.6667ZM6.66667 6.66667H16V4H6.66667C5.2 4 4 5.2 4 6.66667V25.3333C4 26.8 5.2 28 6.66667 28H16V25.3333H6.66667V6.66667Z" />
      </g>
      <defs>
        <clipPath id="clip0_7_232">
          <rect width="32" height="32" />
        </clipPath>
      </defs>
    </Styled.SVG>
  );
};

export default LogoutIcon;
