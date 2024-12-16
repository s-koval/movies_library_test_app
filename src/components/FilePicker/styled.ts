import styled from "styled-components";

const InputWrapper = styled.div(
  (props) => `
  position: relative;

  width: 100%;

  aspect-ratio: 1 / 1.06;

  background: ${props.theme.colors.secondary[400]};

  border-radius: ${props.theme.borderRadius.md};

  border: 2px dotted ${props.theme.colors.neutral[0]};

  transition: background-color .2s ease;

  overflow: hidden;

  &.active {
    background: ${props.theme.colors.secondary[600]};
  }

  @media screen and (max-width: 546px) {
    aspect-ratio: 1.02 / 1;
  }
`
);

const Input = styled.input`
  opacity: 0;

  position: absolute;

  width: 0;
  height: 0;
`;

const InputLabel = styled.label(
  (props) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  position: absolute;
  width: 100%;
  height: 100%;

  padding: ${props.theme.spacing.sm};

  border-radius: ${props.theme.borderRadius.sm};

  cursor: pointer;

  transition: background-color .2s ease;

  img[src] ~ & {
    opacity: 0;
  }

  @media screen and (max-width: 546px) {
    gap: 10px;

    margin-top: -4px;
  }
`
);

const Image = styled.img`
  position: absolute;

  width: 100%;
  height: 100%;

  object-fit: cover;
`;

export default {
  FilePicker: Object.assign(Input, {
    Wrapper: InputWrapper,
    Label: InputLabel,
    Image,
  }),
};
