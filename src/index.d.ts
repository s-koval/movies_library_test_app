import "styled-components";
import { ITheme } from "./interfaces/theme";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface DefaultTheme extends ITheme {}
}
