"use client";

import { FC } from "react";
import { useTranslation } from "react-i18next";

import Link from "@core/components/Link";
import Typography from "@core/components/Typography";

import Styled from "./styled";

const MovieListEmpty: FC = () => {
  const { t } = useTranslation("movies");

  return (
    <Styled.Wrapper>
      <Typography variant="h2" brightness={0}>
        {t("emptyList")}
      </Typography>
      <Link href="create" color="primary">
        {t("addMovie")}
      </Link>
    </Styled.Wrapper>
  );
};

export default MovieListEmpty;
