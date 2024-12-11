import { TBasicKeys, TUnits } from ".";

type TBorderRadiusKeys = TBasicKeys | "xxs" | "xs";

export type TBorderRadius = {
  [BRK in TBorderRadiusKeys]: TUnits;
};
