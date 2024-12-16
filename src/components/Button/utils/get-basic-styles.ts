import { TUnits } from "@core/types/theme";

type TGetBasicStylesProps = {
  borderRadius: TUnits;
  fontSize: TUnits;
  fontWeight: number;
  lineHeight: TUnits;
};

const getBasicStyles = (props: TGetBasicStylesProps) => {
  return `
    cursor: pointer;
  
    outline: none;
  
    border-radius: ${props.borderRadius};

    font-size: ${props.fontSize};
    font-weight: ${props.fontWeight};
    line-height: ${props.lineHeight};

    display: flex;
    align-items: center;
    justify-content: center;
  `;
};

export default getBasicStyles;
