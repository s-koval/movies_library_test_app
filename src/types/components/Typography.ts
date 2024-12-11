import { TBrightness, TTypographyKeys } from "../theme";
import { TColorKeys } from "../theme/colors";

export type TTypographyStylesProps = {
  variant: TTypographyKeys;
  color: TColorKeys;
  brightness: TBrightness;
  truncate: boolean;
};

export type TStyledTypographyProps = {
  [K in keyof TTypographyStylesProps as `$${K}`]: TTypographyStylesProps[K];
};
