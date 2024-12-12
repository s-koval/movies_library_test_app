"use client";

import { FC } from "react";
import { useTranslation } from "react-i18next";

import Typography from "@core/components/Typography";

import CreateMovieForm from "../CreateMovieForm";

import Styled from "./styled";


const CreateContent: FC = () => {
  const { t } = useTranslation("create");

  return (
    <Styled.Wrapper>
      <Typography variant="h2" component="h2" brightness={0}>
        {t("title")}
      </Typography>
      <CreateMovieForm />
    </Styled.Wrapper>
  );
};

export default CreateContent;
