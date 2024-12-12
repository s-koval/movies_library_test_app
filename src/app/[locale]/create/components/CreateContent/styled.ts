import styled from "styled-components";

const Wrapper = styled.div(
  (props) => `
  width: min(1200px, calc(100% - 48px));

  margin-top: ${props.theme.spacing["6xl"]};
  margin-inline: auto;
`
);

export default { Wrapper };
