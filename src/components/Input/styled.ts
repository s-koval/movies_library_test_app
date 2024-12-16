import styled from "styled-components";

const InputWrapper = styled.div(
  (props) => `
    display: flex;

    padding-top: ${props.theme.spacing.lg};

    position: relative;

    &:focus-within {
        ${InputLabel} {
            inset: 0 0 0;

            font-size: ${props.theme.font.size["body-xs"]};
            font-weight: ${props.theme.font.weight["regular"]};
            line-height: ${props.theme.font.lineHeight["body-xs"]};
        }

        ${Input} {
            background-color: transparent;
        }
    }
`
);

const InputLabel = styled.label(
  (props) => `
    position: absolute;

    inset: 36px ${props.theme.spacing.md} 0;

    transition: inset .2s ease, color .2s ease;

    font-size: ${props.theme.font.size["body-sm"]};
    font-weight: ${props.theme.font.weight["regular"]};
    line-height: ${props.theme.font.lineHeight["body-sm"]};

    ${Input}:not([value=""]) ~ & {
        inset: 0 0 0;

        font-size: ${props.theme.font.size["body-xs"]};
        font-weight: ${props.theme.font.weight["regular"]};
        line-height: ${props.theme.font.lineHeight["body-xs"]};
    }
`
);

const Input = styled.input(
  (props) => `
        width: 100%;
  
        padding: calc(${props.theme.spacing.regular} + 2px) ${props.theme.spacing.md};

        border: 1px solid ${props.theme.colors.secondary[400]};
        border-radius: ${props.theme.borderRadius.md};

        background-color: ${props.theme.colors.secondary[400]};
        color: white;

        transition: background-color .2s ease;

        outline: none;

        font-size: ${props.theme.font.size["body-sm"]};
        font-weight: ${props.theme.font.weight.regular};
    `
);

export default {
  Input: Object.assign(Input, {
    Wrapper: InputWrapper,
    Label: InputLabel,
  }),
};
