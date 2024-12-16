import styled from "styled-components";

import StyledButton from "@core/components/Button/styled";
import StyledCheckBox from "@core/components/CheckBox/styled";
import StyledTypography from "@core/components/Typography/styled";

const Form = styled.form(
  (props) => `
  width: 100%;
  max-width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${StyledCheckBox.CheckBox.Label} {
    margin-block: ${props.theme.spacing.lg};
  }

  & > ${StyledTypography.Typography} {
    margin-bottom: ${props.theme.spacing.md};

    text-align: center;
  }

  ${StyledButton.Button} {
    width: 100%;
  }

  @media screen and (max-width: 546px) {
    max-width: 380px;
  }
`
);

const FormControlsWrapper = styled.div`
  width: 100%;
`;

export const FormRow = styled.div(
  (props) => `
  display: flex;
  flex-direction: column;
  gap: ${props.theme.spacing.sm};
`
);

export default {
  Form: Object.assign(Form, {
    ControlsWrapper: FormControlsWrapper,
    Row: FormRow,
  }),
};
