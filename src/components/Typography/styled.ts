import styled from "styled-components";

import { TStyledTypographyProps } from "@core/types/components/Typography";

import getVariant from "./utils/get-variant";

const Typography = styled.span<TStyledTypographyProps>((props) => {
  const basicStyles = getVariant(props.$variant);

  return (
    basicStyles +
    `
    margin-block-start: 0;

    color: ${props.theme.colors[props.$color][props.$brightness]};

    margin: 0;

    ${
      props.$truncate
        ? `
      display: block;               
      
      white-space: nowrap;          
      
      overflow: hidden;             
      text-overflow: ellipsis;      
      
      max-width: 100%;
    `
        : ""
    }
`
  );
});

export default {
  Typography,
};
