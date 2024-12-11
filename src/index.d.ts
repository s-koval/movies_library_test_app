import "styled-components";
import { ITheme } from "./interfaces/theme";

declare module "styled-components" {
  interface DefaultTheme extends ITheme {}
}
