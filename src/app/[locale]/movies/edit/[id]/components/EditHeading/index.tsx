"use client";

import { FC } from "react";
import { useTranslation } from "react-i18next";

import { useMediaQuery } from "@uidotdev/usehooks";

import Typography from "@core/components/Typography";

const EditHeading: FC = () => {
  const isTable = useMediaQuery("(max-width: 768px)");

  const { t } = useTranslation("edit");

  return (
    <Typography variant={isTable ? "h3" : "h2"} component="h2" brightness={0}>
      {t("title")}
    </Typography>
  );
};

export default EditHeading;
