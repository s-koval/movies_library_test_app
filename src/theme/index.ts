import { ITheme } from "@core/interfaces/theme";

import { borderRadius } from "./border-radius";
import { colors } from "./colors";
import { lineHeight } from "./font/lineHeight";
import { fontSizes } from "./font/size";
import { fontWeight } from "./font/weight";
import { spacing } from "./spacing";

const theme: ITheme = {
  colors,
  font: {
    size: fontSizes,
    weight: fontWeight,
    lineHeight,
  },
  borderRadius,
  spacing,
};

export default theme;
