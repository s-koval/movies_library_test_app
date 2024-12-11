export type TBasicNumberKeys =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

export type TBasicKeys = "sm" | "regular" | "md" | "lg" | "xl" | "2xl" | "3xl";

type TUnitKeys = "px" | "em" | "rem";

export type TUnits = `${number}${TUnitKeys}`;

export type TBrightness = TBasicNumberKeys;

export type TVariant = "contained" | "outlined" | "text";

export type TAlign = "start" | "center" | "end";

export type TTypographyKeys =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body"
  | "body-xs"
  | "body-sm"
  | "body-lg"
  | "caption";
