"use client";

import { FC } from "react";
import { useTranslation } from "react-i18next";

import AddIcon from "@core/icons/Add";
import LogoutIcon from "@core/icons/Logout";

import Link from "@core/components/Link";
import Typography from "@core/components/Typography";

import Styled from "./styled";

const HomeHeading: FC = () => {
  const { t } = useTranslation("movies");

  return (
    <Styled.Wrapper>
      <Styled.TitleWrapper>
        <Typography component="h2" variant="h2" brightness={0}>
          {t("title")}
        </Typography>
        <Link href="/create" variant="text">
          <AddIcon size={32} />
        </Link>
      </Styled.TitleWrapper>
      <Styled.LogoutButton>
        Logout
        <LogoutIcon size={32} />
      </Styled.LogoutButton>
    </Styled.Wrapper>
  );
};

export default HomeHeading;
