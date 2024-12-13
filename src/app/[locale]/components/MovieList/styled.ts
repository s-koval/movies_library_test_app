import styled from "styled-components";

const Wrapper = styled.div(
  (props) => `
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(282px, 1fr));
  gap: 24px;

  margin-bottom: ${props.theme.spacing["6xl"]};
`
);

export default { Wrapper };
