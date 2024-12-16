import styled from "styled-components";

const Wrapper = styled.div(
  (props) => `
  width: min(1200px, calc(100% - 48px));

  padding-top: ${props.theme.spacing["6xl"]};
  margin-inline: auto;

  @media screen and (max-width: 546px) {
    padding-top: ${props.theme.spacing["5xl"]};
  }
`
);

export default { Wrapper };
