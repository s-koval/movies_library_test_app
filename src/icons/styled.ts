import styled from "styled-components";

import { TColorKeys } from "@core/types/theme/colors";

type TStyledSVGProps = {
  color: TColorKeys;
  $hasFill?: boolean;
  $hasStroke?: boolean;
};

const SVG = styled.svg<TStyledSVGProps>((props) => {
  let styles = "";

  if (props.$hasFill) {
    styles += `
        fill: ${
          props.color ? props.theme.colors[props.color][400] : "currentColor"
        };
    `;
  }

  if (props.$hasStroke) {
    styles += `
        stroke: ${
          props.color ? props.theme.colors[props.color][400] : "currentColor"
        };
    `;
  }

  if (props.$hasFill && props.$hasStroke) {
    styles += "transition: stroke-color .2s ease, fill .2s ease;";
  } else if (props.$hasFill) {
    styles += "transition: fill .2s ease;";
  } else if (props.$hasStroke) {
    styles += "transition: stroke-color .2s ease;";
  }

  return styles;
});

export default { SVG };
