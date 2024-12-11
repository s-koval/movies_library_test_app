import styled from "styled-components";

import StyledButton from "@core/components/Button/styled";
import StyledCheckBox from "@core/components/CheckBox/styled";
import StyledTypography from "@core/components/Typography/styled";

const Form = styled.form`
  width: 100%;
  max-width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${StyledCheckBox.CheckBox.Label} {
    margin-block: 24px;
  }

  & > ${StyledTypography.Typography} {
    margin-bottom: 40px;
  }

  ${StyledButton.Button} {
    width: 100%;
  }
`;

const FormControlsWrapper = styled.div`
  width: 100%;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default {
  Form: Object.assign(Form, {
    ControlsWrapper: FormControlsWrapper,
    Row: FormRow,
  }),
};
