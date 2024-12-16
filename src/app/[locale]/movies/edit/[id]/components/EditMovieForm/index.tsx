import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import { useParams, useRouter } from "next/navigation";

import MovieForm from "@core/app/[locale]/movies/components/MovieForm";

import { useUpdateMovieMutation } from "@core/services/api/hooks/mutations/movies/useUpdateMovieMutation";

import { TMovieForm } from "@core/types/forms/movies";
import { TUpdateMovieData } from "@core/types/services/api/movie";
import { TMovie } from "@core/types/services/movie";

type TEditMovieFormProps = {
  movie: TMovie;
};

const EditMovieForm: FC<TEditMovieFormProps> = ({ movie }) => {
  const params = useParams();
  const router = useRouter();

  const { t } = useTranslation("messages");

  const { mutate } = useUpdateMovieMutation(movie.id, {
    onSuccess: () => {
      toast.success(t("movie.updated"));

      router.push(`/${params.locale}`);
    },
    onError: (err) => {
      toast.error(t(err.response?.data.message || "somethingWentWrong"));
    },
  });

  const onSubmit = useCallback(
    (data: TMovieForm) => {
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
    <MovieForm
      onCancel={onCancel}
      onSubmit={onSubmit}
      isEdit
      defaultValues={{
        title: movie.title,
        publishYear: movie.publishYear.toString(),
        image: `/uploads/${movie.image}`,
      }}
    />
  );
};

export default EditMovieForm;
