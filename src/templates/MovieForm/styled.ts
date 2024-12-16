import styled from "styled-components";

import Input from "@core/components/Input";

const Form = styled.form(
  (props) => `
  margin-top: ${props.theme.spacing["6xl"]};

  max-width: 960px;
  display: grid;
  grid-template-columns: 1.31fr 1fr;
  grid-template-rows: min-content 1fr;
  column-gap: 127px;

  @media screen and (max-width: 546px) {
    margin-top: ${props.theme.spacing["5xl"]};

    grid-template-columns: 1fr;
  }
`
);

const FilePickerWrapper = styled.div(
  (props) => `
  display: flex;
  gap: 16px;

  grid-row: 1/3;

  @media screen and (max-width: 546px) {
    margin-top: ${props.theme.spacing["lg"]};
    
    grid-row: 2/3;
  }
`
);

const FieldsWrapper = styled.div`
  margin-top: -24px;

  display: flex;
  flex-direction: column;
`;

const FormActions = styled.div(
  (props) => `
  display: flex;
  align-items: flex-start;
  gap: 16px;

  margin-top: ${props.theme.spacing["4xl"]};

  grid-column: 2/3;

  & > * {
    flex: 1;
  }

  & > :last-of-type {
    flex: 1.1;
  }

  @media screen and (max-width: 546px) {
    grid-column: auto;

    grid-row: 3/3;

    margin-top: ${props.theme.spacing["2xl"]};

    & > :last-of-type {
      flex: 1;
    }
  }
`
);

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 100%;
`;

const PublishYearInput = styled(Input)`
  max-width: 216px;

  @media screen and (max-width: 546px) {
    max-width: 100%;
  }
`;

export default {
  Form: Object.assign(Form, {
    Actions: FormActions,
    Row: FormRow,
    PublishYearInput,
  }),
  FilePickerWrapper,
  FieldsWrapper,
};
