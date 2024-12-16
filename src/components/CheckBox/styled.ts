import styled from "styled-components";

const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CheckBox = styled.input`
  opacity: 0;

  position: absolute;
`;

export default {
  CheckBox: Object.assign(CheckBox, {
    Label: CheckBoxLabel,
  }),
};
