import { TIconProps } from "@core/types/icons";
import { FC } from "react";
import Styled from "./styled";

const CheckBoxUnchecked: FC<TIconProps> = ({
  className,
  color = "neutral",
  size = 16,
}) => {
  return (
    <Styled.SVG
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      $hasFill
      color={color}
      className={className}
    >
      <rect width="20" height="20" rx="5" />
    </Styled.SVG>
  );
};

export default CheckBoxUnchecked;
