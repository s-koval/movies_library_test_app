import { TBrightness } from ".";

export type TColorKeys =
  | "primary"
  | "secondary"
  | "error"
  | "success"
  | "warning"
  | "neutral";

export type TColors = {
  [CK in TColorKeys]: {
    [CB in TBrightness]: string;
  };
};
