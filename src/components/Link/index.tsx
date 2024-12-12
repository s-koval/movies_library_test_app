import { FC, PropsWithChildren } from "react";

import { LinkProps as TRootLinkProps } from "next/link";

import { TLinkStylesProps } from "@core/types/components/Link";

import Styled from "./styled";

type TLinkProps = TRootLinkProps &
  Partial<TLinkStylesProps> &
  PropsWithChildren;

const Link: FC<TLinkProps> = ({
  children,
  color = "neutral",
  brightness = 400,
  variant = "contained",
  ...rest
}) => {
  return (
    <Styled.Link
      {...rest}
      $color={color}
      $variant={variant}
      $brightness={brightness}
    >
      {children}
    </Styled.Link>
  );
};

export default Link;
