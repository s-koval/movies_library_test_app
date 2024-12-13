import styled from "styled-components";

import StyledLink from "@core/components/Link/styled";
import StyledTypography from "@core/components/Typography/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

  ${StyledTypography.Typography} {
    text-align: center;
  }

  @media screen and (max-width: 546px) {
    ${StyledLink.Link} {
      width: 100%;
    }
  }
`;

export default { Wrapper };
