import styled from "styled-components";

import RootButton from "../Button";

const Button = styled(RootButton)(
  (props) => `
  padding: 0;

  width: 32px;
  height: 32px;

  border-radius: ${props.theme.borderRadius.xs};

  &.prev-btn {
    margin-right: 10px;
  }

  &.next-btn {
    margin-left: 10px;
  }

  &.next-btn,
  &.prev-btn {
    width: auto;
  }
`
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export default {
  Pagination: Object.assign(Wrapper, {
    Button,
  }),
};
