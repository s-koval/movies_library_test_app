import { FC } from "react";

import { i18nNamespaces } from "@core/configs/i18n";
import { TDynamicPageProps } from "@core/types";

import initTranslations from "@core/app/i18n";

import TranslationsProvider from "@core/providers/TranslationProvider";

import EditContent from "./components/EditContent";

type TEditPageProps = TDynamicPageProps;

const EditPage: FC<TEditPageProps> = async ({ params }) => {
  const { locale, id } = await params;

  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      locale={locale}
      namespaces={i18nNamespaces}
      resources={resources}
    >
      <EditContent id={id} />
    </TranslationsProvider>
  );
};

export default EditPage;
