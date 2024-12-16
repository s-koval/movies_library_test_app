import styled from "styled-components";

const Wrapper = styled.div(
  (props) => `
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(282px, 1fr));
  gap: 24px;

  margin-bottom: calc(${props.theme.spacing["6xl"]} + 2px);

  @media screen and (max-width: 546px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));

    column-gap: 20px;
    row-gap: 40px;

    margin-bottom: ${props.theme.spacing["2xl"]};
  }
`
);

export default { Wrapper };
