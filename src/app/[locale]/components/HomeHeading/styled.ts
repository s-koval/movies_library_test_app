import styled from "styled-components";

import RootAddIcon from "@core/icons/Add";

const Wrapper = styled.div(
  (props) => `
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-block: ${props.theme.spacing["6xl"]};

  @media screen and (max-width: 546px) {
    padding-block: ${props.theme.spacing["5xl"]};
  }
`
);

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const AddIcon = styled(RootAddIcon)(
  (props) => `
  margin-top: ${props.theme.spacing.sm};

  &:hover, &:focus-within {
    fill: ${props.theme.colors.neutral[400]};
  }

  @media screen and (max-width: 546px) {
    margin-top: 0px;
  }
`
);

const LogoutButton = styled.button(
  (props) => `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${props.theme.spacing.md};

    padding: 0;

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

export default { Wrapper, TitleWrapper, LogoutButton, AddIcon };
