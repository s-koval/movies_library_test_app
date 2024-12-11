import React, { FC, HTMLAttributes, PropsWithChildren } from "react";

import { TTypographyStylesProps } from "@core/types/components/Typography";
import Styled from "./styled";

type TTypographyProps = PropsWithChildren & {
  component?: keyof HTMLElementTagNameMap;
} & HTMLAttributes<HTMLElement> &
  Partial<TTypographyStylesProps>;

const Typography: FC<TTypographyProps> = ({
  children,
  variant = "body",
  component = "p",
  color = "neutral",
  brightness = 400,
  truncate = false,
  ...rest
}) => (
  <Styled.Typography
    {...rest}
    as={component}
    $variant={variant}
    $color={color}
    $brightness={brightness}
    $truncate={truncate}
  >
    {children}
  </Styled.Typography>
);

export default Typography;
