import styled from "styled-components";

const Wrapper = styled.div(
  (props) => `
    padding: 8px 8px 16px 8px;

    background-color: ${props.theme.colors.secondary[600]};

    border-radius: ${props.theme.borderRadius.lg};
`
);

const Image = styled.img(
  (props) => `
  width: 100%;
  max-height: 400px;

  object-fit: cover;
  object-position: center;

  border-radius: ${props.theme.borderRadius.lg};
`
);

const Content = styled.div`
  margin-top: 16px;

  padding-inline: 8px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default { Wrapper, Image, Content };
