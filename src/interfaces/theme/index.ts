import { TBorderRadius } from "@core/types/theme/borderRadius";
import { TColors } from "@core/types/theme/colors";
import { TLineHeights } from "@core/types/theme/font/lineHeight";
import { TFontSizes } from "@core/types/theme/font/size";
import { TFontWeight } from "@core/types/theme/font/weight";
import { TSpacing } from "@core/types/theme/spacing";

export interface ITheme {
  colors: TColors;
  font: {
    size: TFontSizes;
    weight: TFontWeight;
    lineHeight: TLineHeights;
  };
  borderRadius: TBorderRadius;
  spacing: TSpacing;
}
