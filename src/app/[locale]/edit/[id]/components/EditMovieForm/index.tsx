import { FC, useCallback } from "react";

import { useParams, useRouter } from "next/navigation";

import MovieForm from "@core/templates/MovieForm";

import { useUpdateMovieMutation } from "@core/services/api/hooks/mutations/movies/useUpdateMovieMutation";

import { TUpdateMovieData } from "@core/types/services/api/movie";
import { TMovie } from "@core/types/services/movie";
import { TMovieForm } from "@core/types/forms/movies";

type TEditMovieFormProps = {
  movie: TMovie;
};

const EditMovieForm: FC<TEditMovieFormProps> = ({ movie }) => {
  const params = useParams();
  const router = useRouter();

  const { mutate } = useUpdateMovieMutation(movie.id, {
    onSuccess: () => {
      console.log("Success");

      router.push(`/${params.locale}`);
    },
    onError: (err) => {
      console.log(err);
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
      }}
    />
  );
};

export default EditMovieForm;
