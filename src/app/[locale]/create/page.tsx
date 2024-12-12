import { FC } from "react";

import { i18nNamespaces } from "@core/configs/i18n";
import { TDefaultPageProps } from "@core/types";

import initTranslations from "@core/app/i18n";

import TranslationsProvider from "@core/providers/TranslationProvider";



import CreateContent from "./components/CreateContent";

type TCreatePageProps = TDefaultPageProps;

const CreatePage: FC<TCreatePageProps> = async ({ params }) => {
  const { locale } = await params;

  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <CreateContent />
    </TranslationsProvider>
  );
};

export default CreatePage;
