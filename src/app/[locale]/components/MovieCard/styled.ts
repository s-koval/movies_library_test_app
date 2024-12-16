import styled from "styled-components";

const Wrapper = styled.div(
  (props) => `
    padding: 8px 8px 16px 8px;

    background-color: ${props.theme.colors.secondary[600]};

    border-radius: ${props.theme.borderRadius.lg};

    cursor: pointer;

    transition: background-color .2s ease;

    &:hover {
      background-color: ${props.theme.colors.secondary[400]};
    }

    @media screen and (max-width: 546px) {
      padding: 0;
      padding-bottom: ${props.theme.spacing.regular};

      overflow: hidden;
    }
`
);

const Image = styled.img(
  (props) => `
  width: 100%;
  max-height: 400px;

  aspect-ratio: 1 / 1.51;
  
  object-fit: cover;
  object-position: center;

  border-radius: ${props.theme.borderRadius.lg};

  @media screen and (max-width: 546px) {
    aspect-ratio: 1 / 1.37;

    border-radius: 0;
  }
`
);

const Content = styled.div(
  (props) => `
  margin-top: ${props.theme.spacing.regular};

  padding-inline: ${props.theme.spacing.sm};

  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (max-width: 546px) {
    margin-top: ${props.theme.spacing.sm};
    padding-inline: ${props.theme.spacing.regular};

    & > :first-of-type {
      font-weight: ${props.theme.font.weight.bold};
    }

    & > :last-of-type {
      margin-top: ${props.theme.spacing.sm};
    }
  }
`
);

export default { Wrapper, Image, Content };
