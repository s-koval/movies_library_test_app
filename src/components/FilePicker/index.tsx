"use client";

import {
  ChangeEvent,
  DragEvent,
  FC,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

import DownloadIcon from "@core/icons/Download";

import Styled from "./styled";

type TFilePickerProps = {
  label: string;
  onSelect: (file: File) => void;
  value?: string | File;
};

const FilePicker: FC<TFilePickerProps> = ({ label, onSelect, value }) => {
  const id = useId();

  const ref = useRef<HTMLDivElement>(null);

  const [src, setSrc] = useState<string>();

  useEffect(() => {
    if (value instanceof File) {
      const fileSrc = URL.createObjectURL(value);

      setSrc(fileSrc);

      return () => {
        URL.revokeObjectURL(fileSrc);
      };
    } else {
      setSrc(value);
    }
  }, [value]);

  const onDragOver = (evt: DragEvent<HTMLElement>) => {
    evt.preventDefault();
    evt.stopPropagation();
  };

  const onDragEnter = (evt: DragEvent<HTMLElement>) => {
    evt.preventDefault();
    evt.stopPropagation();

    ref.current?.classList.add("active");
  };

  const onDragLeave = (evt: DragEvent<HTMLElement>) => {
    evt.preventDefault();
    evt.stopPropagation();

    ref.current?.classList.remove("active");
  };

  const onDrop = (evt: DragEvent<HTMLElement>) => {
    evt.preventDefault();
    evt.stopPropagation();

    const file = evt.dataTransfer.files[0];

    if (file) {
      onSelect(file);
    }

    ref.current?.classList.remove("active");
  };

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const file = evt.target.files?.[0];

    if (file) {
      onSelect(file);
    }
  };

  return (
    <Styled.FilePicker.Wrapper
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDragEnter={onDragEnter}
      onDrop={onDrop}
      ref={ref}
    >
      <Styled.FilePicker.Image src={src} />
      <Styled.FilePicker type="file" id={id} onChange={onChange} />
      <Styled.FilePicker.Label htmlFor={id}>
        <DownloadIcon size={24} />
        {label}
      </Styled.FilePicker.Label>
    </Styled.FilePicker.Wrapper>
  );
};

export default FilePicker;
