"use client";

import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import Typography from "@core/components/Typography";

import { useFetchMovieQuery } from "@core/services/api/hooks/queries/movies/useFetchMovieQuery";

import EditMovieForm from "../EditMovieForm";

import Styled from "./styled";




type TEditMovieContent = {
  id: string;
};

const EditContent: FC<TEditMovieContent> = ({ id }) => {
  const { t } = useTranslation();

  const { data } = useFetchMovieQuery(id);

  if (!data) {
    return null;
  }

  return (
    <Styled.Wrapper>
      <Typography variant="h2" component="h2" brightness={0}>
        {t("title")}
      </Typography>
      <EditMovieForm movie={data} />
    </Styled.Wrapper>
  );
};

export default EditContent;
