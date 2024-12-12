import styled from "styled-components";

import RootLink from "next/link";

import { TStyledLinkProps } from "@core/types/components/Link";
import { TBasicNumberKeys } from "@core/types/theme";

import { getBasicStyles } from "./utils";

const Link = styled(RootLink)<TStyledLinkProps>((props) => {
  const basicStyles = getBasicStyles();

  let styles = "";

  let hover: string;

  if (props.$brightness === 900) {
    hover = props.theme.colors[props.$color][900];
  } else {
    hover =
      props.theme.colors[props.$color][
        (props.$brightness + 100) as TBasicNumberKeys
      ];
  }

  switch (props.$variant) {
    case "contained":
      styles = `
            background-color: ${
              props.theme.colors[props.$color][props.$brightness]
            };
            
            color: ${props.theme.colors.neutral[100]};
            
            transition: background-color 0.2s ease;
  
            border: 1px solid transparent;
  
            padding: ${props.theme.spacing.md} ${props.theme.spacing.lg};
  
            &:hover,
            &:focus-visible,
            &:disabled {
                background-color: ${hover}; 
            }
        `;
      break;
    case "outlined":
      styles = `
            background-color: transparent;
        
            border: 2px solid ${
              props.theme.colors[props.$color][props.$brightness]
            };
  
            color: ${props.theme.colors[props.$color][props.$brightness]};
  
            transition: border-color 0.2s ease, color 0.2s ease;
  
            padding: ${props.theme.spacing.md} ${props.theme.spacing.lg};
  
            &:hover,
            &:focus-visible,
            &:disabled {
                color: ${hover};
  
                border-color: ${hover}; 
            }
        `;
      break;
    case "text":
      styles = `
            background-color: transparent;
  
            border: none;
  
            color: ${props.theme.colors[props.$color][props.$brightness]};
  
            transition: color 0.2s ease;
  
            &:hover,
            &:focus-visible,
            &:disabled {
              color: ${hover};
            }
        `;
      break;
    default:
      throw new Error("Invalid button variant.");
  }

  return basicStyles + styles;
});

export default {
  Link,
};
