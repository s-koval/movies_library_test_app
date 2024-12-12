import { TBrightness, TVariant } from "../theme";
import { TColorKeys } from "../theme/colors";

export type TLinkStylesProps = {
  variant: TVariant;
  color: TColorKeys;
  brightness: TBrightness;
};

export type TStyledLinkProps = {
  [K in keyof TLinkStylesProps as `$${K}`]: TLinkStylesProps[K];
};
