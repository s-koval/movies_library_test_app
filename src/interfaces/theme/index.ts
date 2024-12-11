import { TBorderRadius } from "@core/types/theme/borderRadius";
import { TColors } from "@core/types/theme/colors";
import { TFontSizes } from "@core/types/theme/font/size";
import { TFontWeight } from "@core/types/theme/font/weight";
import { TSpacing } from "@core/types/theme/spacing";

export interface ITheme {
  colors: TColors;
  font: {
    size: TFontSizes;
    weight: TFontWeight;
  };
  borderRadius: TBorderRadius;
  spacing: TSpacing;
}
