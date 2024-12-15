"use client";

import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import dynamic from "next/dynamic";

import Typography from "@core/components/Typography";

import { useFetchMovieQuery } from "@core/services/api/hooks/queries/movies/useFetchMovieQuery";

import EditMovieForm from "../EditMovieForm";

import Styled from "./styled";

const EditHeading = dynamic(() => import("../EditHeading"), { ssr: false });

type TEditMovieContent = {
  id: string;
};

const EditContent: FC<TEditMovieContent> = ({ id }) => {
  const { t } = useTranslation("edit");

  const { data, isLoading } = useFetchMovieQuery(id);

  return (
    <Styled.Wrapper>
      {isLoading ? (
        <Typography>{t("loading")}</Typography>
      ) : data ? (
        <>
          <EditHeading />
          <EditMovieForm movie={data} />
        </>
      ) : (
        <Typography>{t("notFound")}</Typography>
      )}
    </Styled.Wrapper>
  );
};

export default EditContent;
