import { borderRadius } from "./border-radius";
import { ITheme } from "@core/interfaces/theme";

import { colors } from "./colors";
import { fontSizes } from "./font/size";
import { fontWeight } from "./font/weight";
import { spacing } from "./spacing";
import { lineHeight } from "./font/lineHeight";

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
