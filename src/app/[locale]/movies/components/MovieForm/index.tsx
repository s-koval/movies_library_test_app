"use client";

import { ChangeEvent, FC } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { yupResolver } from "@hookform/resolvers/yup";

import createMovieSchema from "@core/validation/movies/create";
import editMovieSchema from "@core/validation/movies/edit";

import Button from "@core/components/Button";
import FilePicker from "@core/components/FilePicker";
import HelperText from "@core/components/HelperText";
import Input from "@core/components/Input";

import { TMovieChangeHandler, TMovieForm } from "@core/types/forms/movies";

import Styled from "./styled";

type TMovieFormProps = {
  onSubmit: (data: TMovieForm) => void;
  onCancel: () => void;
  isEdit?: boolean;
  defaultValues?: {
    title?: string;
    image?: string | File;
    publishYear: string;
  };
};

const MovieForm: FC<TMovieFormProps> = ({
  onSubmit,
  onCancel,
  isEdit = false,
  defaultValues = {
    publishYear: "",
    title: "",
  },
}) => {
  const { t } = useTranslation(["templates", "validations"]);

  const {
    setValue,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<TMovieForm>({
    resolver: yupResolver(isEdit ? editMovieSchema : createMovieSchema),
    reValidateMode: "onChange",
    defaultValues: {
      ...defaultValues,
      image:
        defaultValues.image instanceof File ? defaultValues.image : undefined,
    },
  });

  const onChange = ((field: keyof TMovieForm) => {
    if (field === "image") {
      return (file: File) => {
        setValue("image", file);
      };
    }

    return (evt: ChangeEvent<HTMLInputElement>) => {
      if (evt.target.validity.patternMismatch) {
        return;
      }

      setValue(field, evt.target.value);
    };
  }) as TMovieChangeHandler;

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <Styled.FilePickerWrapper>
        <Styled.Form.Row>
          <FilePicker
            label={t("movieForm.filePicker.label")}
            onSelect={onChange("image")}
            value={watch("image") ?? defaultValues?.image}
          />
          <HelperText
            value={
              errors?.image?.message &&
              t(errors?.image?.message, { ns: "validations" })
            }
            color="error"
          />
        </Styled.Form.Row>
      </Styled.FilePickerWrapper>
      <Styled.FieldsWrapper>
        <Styled.Form.Row>
          <Input
            label={t("movieForm.title.label")}
            onChange={onChange("title")}
            value={watch("title")}
          />
          <HelperText
            value={
              errors?.title?.message &&
              t(errors?.title?.message, { ns: "validations" })
            }
            color="error"
          />
        </Styled.Form.Row>
        <Styled.Form.Row>
          <Styled.Form.PublishYearInput
            label={t("movieForm.publishYear.label")}
            onChange={onChange("publishYear")}
            value={watch("publishYear")}
            pattern="\d+"
          />
          <HelperText
            value={
              errors?.publishYear?.message &&
              t(errors?.publishYear?.message, { ns: "validations" })
            }
            color="error"
          />
        </Styled.Form.Row>
      </Styled.FieldsWrapper>
      <Styled.Form.Actions>
        <Button
          variant="outlined"
          color="neutral"
          brightness={0}
          type="button"
          onClick={onCancel}
        >
          {t("movieForm.actions.cancel")}
        </Button>
        <Button>{t("movieForm.actions.submit")}</Button>
      </Styled.Form.Actions>
    </Styled.Form>
  );
};

export default MovieForm;
