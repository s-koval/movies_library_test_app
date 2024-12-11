import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 100vh;

  background-image: url("/auth-waves.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
`;

export default { Wrapper };
