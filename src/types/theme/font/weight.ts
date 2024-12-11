export type TFontWeightKeys =
  | "thin"
  | "extra-light"
  | "light"
  | "regular"
  | "medium"
  | "semi-bold"
  | "bold"
  | "extra-bold"
  | "black";

export type TFontWeight = {
  [FWK in TFontWeightKeys]: number;
};
