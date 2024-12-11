import { FC } from "react";

import { TBrightness } from "@core/types/theme";
import { TColorKeys } from "@core/types/theme/colors";

import Typography from "../Typography";

type THelperText = {
  value?: string;
  color?: TColorKeys;
  brightness?: TBrightness;
};

const HelperText: FC<THelperText> = ({ value, brightness, color }) => {
  return (
    value?.length && (
      <Typography color={color} brightness={brightness} variant="caption">
        {value.substring(0, 1).toUpperCase()}
        {value.slice(1)}
      </Typography>
    )
  );
};

export default HelperText;
