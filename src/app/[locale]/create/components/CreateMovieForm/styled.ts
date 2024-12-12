import styled from "styled-components";

const Form = styled.form(
  (props) => `
  margin-top: ${props.theme.spacing["6xl"]};

  display: grid;
  grid-template-columns: 473px 362px;
  gap: clamp(24px, 8vw, 127px);
`
);

const LeftSide = styled.div`
  display: flex;
  gap: 16px;
`;

const RightSide = styled.div`
  margin-top: -24px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FormActions = styled.div`
  display: flex;
  gap: 16px;

  margin-top: 40px;

  & > * {
    flex: 1;
  }
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 100%;
`;

export default {
  Form: Object.assign(Form, {
    Actions: FormActions,
    Row: FormRow,
  }),
  LeftSide,
  RightSide,
};
