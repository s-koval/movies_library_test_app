import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;

  background-image: url("/svg/bottom-vector.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;

  @media screen and (max-width: 546px) {
    background-image: url("/svg/bottom-vector-mobile.svg");
  }
`;

export default { Wrapper };
