import styled from "styled-components";

const Wrapper = styled.div(
  (props) => `
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-block: ${props.theme.spacing["6xl"]};
`
);

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const LogoutButton = styled.button(
  (props) => `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    color: ${props.theme.colors.neutral[0]};

    background-color: transparent;

    border: none;
    
    outline: none;

    font-size: ${props.theme.font.size.body};
    font-weight: ${props.theme.font.weight.bold};
    line-height: ${props.theme.font.lineHeight.body};

    cursor: pointer;

    transition: color .2s ease;

    svg {
      fill: ${props.theme.colors.neutral[0]};
    }

    &:hover {
      color: ${props.theme.colors.neutral[300]};

      svg {
        fill: ${props.theme.colors.neutral[300]};
      }
    }
  `
);

export default { Wrapper, TitleWrapper, LogoutButton };
