"use client";

import { I18nextProvider } from "react-i18next";
import initTranslations from "@core/app/i18n";
import { createInstance, Resource } from "i18next";
import { FC, PropsWithChildren } from "react";

type TTranslationProviderProps = {
  locale: string;
  namespaces: string[];
  resources: Resource;
} & PropsWithChildren;

const TranslationsProvider: FC<TTranslationProviderProps> = ({
  children,
  locale,
  namespaces,
  resources,
}) => {
  const i18n = createInstance();

  initTranslations(locale, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default TranslationsProvider;
