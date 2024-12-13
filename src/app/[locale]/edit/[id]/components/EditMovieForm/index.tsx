import { ChangeEvent, FC, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { yupResolver } from "@hookform/resolvers/yup";
import { useParams, useRouter } from "next/navigation";

import editMovieSchema from "@core/validation/movies/edit";

import Button from "@core/components/Button";
import FilePicker from "@core/components/FilePicker";
import HelperText from "@core/components/HelperText";
import Input from "@core/components/Input";

import { useUpdateMovieMutation } from "@core/services/api/hooks/mutations/movies/useUpdateMovieMutation";

import { TEditMovieForm } from "@core/types/forms/movies/edit";
import { TUpdateMovieData } from "@core/types/services/api/movie";
import { TMovie } from "@core/types/services/movie";

import Styled from "./styled";

type TEditMovieFormProps = {
  movie: TMovie;
};

const EditMovieForm: FC<TEditMovieFormProps> = ({ movie }) => {
  const { t } = useTranslation("edit");

  const params = useParams();
  const router = useRouter();

  const {
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm<TEditMovieForm>({
    defaultValues: {
      title: movie.title,
      publishYear: movie.publishYear + "",
    },
    resolver: yupResolver(editMovieSchema),
  });

  const { mutate } = useUpdateMovieMutation(movie.id, {
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

  const onChange = useCallback(
    (field: keyof Exclude<TEditMovieForm, "image">) => {
      return (evt: ChangeEvent<HTMLInputElement>) => {
        setValue(field, evt.target.value);
      };
    },
    [setValue]
  );

  const onSubmit = useCallback(
    (data: TEditMovieForm) => {
      const transformedData: TUpdateMovieData = {};

      if (data.title !== movie.title) {
        transformedData.title = data.title;
      }

      if (data.publishYear !== movie.publishYear + "") {
        transformedData.publishYear = data.publishYear;
      }

      if (data.image) {
        transformedData.image = data.image;
      }

      mutate(transformedData);
    },
    [movie, mutate]
  );

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

export default EditMovieForm;
