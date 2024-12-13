"use client";

import { ChangeEvent, FC } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { yupResolver } from "@hookform/resolvers/yup";
import { useParams, useRouter } from "next/navigation";

import createMovieSchema from "@core/validation/movies/create";

import Button from "@core/components/Button";
import FilePicker from "@core/components/FilePicker";
import HelperText from "@core/components/HelperText";
import Input from "@core/components/Input";

import { useCreateMovieMutation } from "@core/services/api/hooks/mutations/movies/useCreateMovieMutation";

import { TCreateMovieForm } from "@core/types/forms/movies/create";

import Styled from "./styled";

const CreateMovieForm: FC = () => {
  const { t } = useTranslation("create");

  const params = useParams();
  const router = useRouter();

  const {
    setValue,
    watch,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<TCreateMovieForm>({
    defaultValues: {
      title: "",
      publishYear: "",
    },
    resolver: yupResolver(createMovieSchema),
    reValidateMode: "onChange",
  });

  const { mutate } = useCreateMovieMutation({
    onSuccess: () => {
      console.log("Success");

      reset();
      router.push(`/${params.locale}`);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const onSelect = (file: File) => {
    setValue("image", file);
  };

  const onChange = (field: keyof Exclude<TCreateMovieForm, "image">) => {
    return (evt: ChangeEvent<HTMLInputElement>) => {
      setValue(field, evt.target.value);
    };
  };

  const onSubmit = (data: TCreateMovieForm) => {
    mutate(data);
  };

  const onCancel = () => {
    router.push(`/${params.locale}`);
  };

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <Styled.FilePickerWrapper>
        <Styled.Form.Row>
          <FilePicker label={t("filePicker.label")} onSelect={onSelect} />
          <HelperText value={errors?.image?.message} color="error" />
        </Styled.Form.Row>
      </Styled.FilePickerWrapper>
      <Styled.FieldsWrapper>
        <Styled.Form.Row>
          <Input
            label="Title"
            onChange={onChange("title")}
            value={watch("title")}
          />
          <HelperText value={errors?.title?.message} color="error" />
        </Styled.Form.Row>
        <Styled.Form.Row>
          <Styled.Form.PublishYearInput
            label="Publish year"
            onChange={onChange("publishYear")}
            value={watch("publishYear")}
          />
          <HelperText value={errors?.publishYear?.message} color="error" />
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
          Cancel
        </Button>
        <Button>Submit</Button>
      </Styled.Form.Actions>
    </Styled.Form>
  );
};

export default CreateMovieForm;
