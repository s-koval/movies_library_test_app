"use client";

import { ChangeEvent, DragEvent, FC, useId } from "react";

import Styled from "./styled";

type TFilePickerProps = {
  label: string;
  onSelect: (evt: File) => void;
};

const FilePicker: FC<TFilePickerProps> = ({ label, onSelect }) => {
  const id = useId();

  const onDragOver = (evt: DragEvent<HTMLElement>) => {
    evt.preventDefault();
    evt.stopPropagation();
  };

  const onDrop = (evt: DragEvent<HTMLElement>) => {
    evt.preventDefault();
    evt.stopPropagation();

    const file = evt.dataTransfer.files[0];

    if (file) {
      onSelect(file);
    }
  };

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const file = evt.target.files?.[0];

    if (file) {
      onSelect(file);
    }
  };

  return (
    <Styled.FilePicker.Wrapper onDragOver={onDragOver} onDrop={onDrop}>
      <Styled.FilePicker type="file" id={id} onChange={onChange} />
      <Styled.FilePicker.Label htmlFor={id}>{label}</Styled.FilePicker.Label>
    </Styled.FilePicker.Wrapper>
  );
};

export default FilePicker;
