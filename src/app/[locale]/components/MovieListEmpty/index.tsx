"use client";

import { FC } from "react";
import { useTranslation } from "react-i18next";

import { useMediaQuery } from "@uidotdev/usehooks";
import { useParams } from "next/navigation";

import Link from "@core/components/Link";
import Typography from "@core/components/Typography";

import Styled from "./styled";

const MovieListEmpty: FC = () => {
  const isTable = useMediaQuery("(max-width: 768px)");

  const params = useParams();

  const { t } = useTranslation("movies");

  return (
    <Styled.Wrapper>
      <Typography component="h2" variant={isTable ? "h3" : "h2"} brightness={0}>
        {t("emptyList")}
      </Typography>
      <Link href={`/${params.locale}/movies/create`} color="primary">
        {t("addMovie")}
      </Link>
    </Styled.Wrapper>
  );
};

export default MovieListEmpty;
