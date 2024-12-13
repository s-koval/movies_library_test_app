import styled from "styled-components";

const Wrapper = styled.div(
  (props) => `
  width: min(1200px, calc(100% - 48px));

  padding-bottom: ${props.theme.spacing["7xl"]};
  margin-inline: auto;
`
);

export default { Wrapper };
