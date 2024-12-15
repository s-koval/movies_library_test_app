"use client";

import { FC } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import { useParams, useRouter } from "next/navigation";

import MovieForm from "@core/templates/MovieForm";

import { useCreateMovieMutation } from "@core/services/api/hooks/mutations/movies/useCreateMovieMutation";

import { TMovieForm } from "@core/types/forms/movies";


const CreateMovieForm: FC = () => {
  const params = useParams();
  const router = useRouter();

  const { t } = useTranslation("messages");

  const { mutate } = useCreateMovieMutation({
    onSuccess: () => {
      toast.success(t("movie.created"));

      router.push(`/${params.locale}`);
    },
    onError: (err) => {
      toast.error(t(err.response?.data.message || "somethingWentWrong"));
    },
  });

  const onSubmit = (data: TMovieForm) => {
    if (!data.image || !data.publishYear || !data.title) {
      return;
    }

    mutate({
      image: data.image,
      publishYear: data.publishYear,
      title: data.title,
    });
  };

  const onCancel = () => {
    router.push(`/${params.locale}`);
  };

  return <MovieForm onCancel={onCancel} onSubmit={onSubmit} />;
};

export default CreateMovieForm;
