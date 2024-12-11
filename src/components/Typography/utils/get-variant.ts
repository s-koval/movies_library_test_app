import theme from "@core/theme";
import { TTypographyKeys } from "@core/types/theme";

const getVariant = (variant: TTypographyKeys) => {
  let styles = `
    font-size: ${theme.font.size[variant]};
    line-height: ${theme.font.lineHeight[variant]};
  `;

  if (["caption", "body-xs", "body-sm", "body", "body-lg"].includes(variant)) {
    styles += `font-weight: ${theme.font.weight.regular};`;
  }

  if (["h6", "h5", "h4"].includes(variant)) {
    styles += `font-weight: ${theme.font.weight.bold};`;
  }

  if (["h3", "h2", "h1"].includes(variant)) {
    styles += `font-weight: ${theme.font.weight["semi-bold"]};`;
  }

  return styles;
};

export default getVariant;
