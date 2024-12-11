import { TBasicKeys, TUnits } from ".";

type TSpacingKeys = TBasicKeys | "xxs" | "xs" | "4xl" | "5xl" | "6xl" | "7xl";

export type TSpacing = {
  [SK in TSpacingKeys]: TUnits;
};
