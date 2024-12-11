import { TTypographyKeys, TUnits } from "..";

export type TLineHeightsKeys = TTypographyKeys;

export type TLineHeights = {
  [LHK in TLineHeightsKeys]: TUnits;
};
