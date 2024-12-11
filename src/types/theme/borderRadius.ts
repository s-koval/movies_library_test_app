import { TBasicKeys, TUnits } from ".";

type TBorderRadiusKeys = TBasicKeys;

export type TBorderRadius = {
  [BRK in TBorderRadiusKeys]: TUnits;
};
