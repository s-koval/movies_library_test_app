import { TBrightness, TVariant } from "../theme";
import { TColorKeys } from "../theme/colors";

export type TButtonStylesProps = {
  variant: TVariant;
  color: TColorKeys;
  brightness: TBrightness;
};

export type TStyledButtonProps = {
  [K in keyof TButtonStylesProps as `$${K}`]: TButtonStylesProps[K];
};
