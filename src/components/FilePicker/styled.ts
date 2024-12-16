import styled from "styled-components";

const InputWrapper = styled.div(
  (props) => `
  width: 100%;

  aspect-ratio: 1 / 1.06;

  background: ${props.theme.colors.secondary[400]};

  border-radius: ${props.theme.borderRadius.md};

  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px dotted ${props.theme.colors.neutral[0]};

  @media screen and (max-width: 546px) {
    aspect-ratio: 1.02 / 1;
  }
`
);

const Input = styled.input`
  display: none;
`;

const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  @media screen and (max-width: 546px) {
    gap: 10px;

    margin-top: -4px;
  }
`;

export default {
  FilePicker: Object.assign(Input, {
    Wrapper: InputWrapper,
    Label: InputLabel,
  }),
};
