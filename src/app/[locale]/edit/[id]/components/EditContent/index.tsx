"use client";

import React, { FC } from "react";

import dynamic from "next/dynamic";

import { useFetchMovieQuery } from "@core/services/api/hooks/queries/movies/useFetchMovieQuery";

import EditMovieForm from "../EditMovieForm";

import Styled from "./styled";

const EditHeading = dynamic(() => import("../EditHeading"), { ssr: false });

type TEditMovieContent = {
  id: string;
};

const EditContent: FC<TEditMovieContent> = ({ id }) => {
  const { data } = useFetchMovieQuery(id);

  if (!data) {
    return null;
  }

  return (
    <Styled.Wrapper>
      <EditHeading />
      <EditMovieForm movie={data} />
    </Styled.Wrapper>
  );
};

export default EditContent;
