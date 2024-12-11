import styled from "styled-components";

const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CheckBox = styled.input`
  display: none;
`;

export default {
  CheckBox: Object.assign(CheckBox, {
    Label: CheckBoxLabel,
  }),
};
