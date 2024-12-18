import { FC } from "react";

import { i18nNamespaces } from "@core/configs/i18n";

import TranslationsProvider from "@core/providers/TranslationProvider";

import initTranslations from "../i18n";

import HomeContent from "./components/HomeContent";

type THomePageProps = { params: Promise<{ locale: string }> };

const HomePage: FC<THomePageProps> = async ({ params }) => {
  const { locale } = await params;

  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      locale={locale}
      namespaces={i18nNamespaces}
      resources={resources}
    >
      <HomeContent />
    </TranslationsProvider>
  );
};

export default HomePage;
