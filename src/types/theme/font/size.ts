import { TTypographyKeys, TUnits } from "..";

export type TFontSizeKeys = TTypographyKeys;

export type TFontSizes = {
  [FSK in TFontSizeKeys]: TUnits;
};
