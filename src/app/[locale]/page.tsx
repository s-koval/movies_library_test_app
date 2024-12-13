import { FC } from "react";

import { i18nNamespaces } from "@core/configs/i18n";
import { TDefaultPageProps } from "@core/types";

import fetchMoviesQuery from "@core/services/api/handlers/queries/movies/fetchMoviesQuery";
import { QUERY_KEY as FETCH_MOVIES_QUERY_KEY } from "@core/services/api/hooks/queries/movies/useFetchMoviesQuery";

import { DEFAULT_MOVIES_PAGE } from "@core/constants/api/movies";

import { queryClient } from "@core/providers/QueryProvider/client";
import TranslationsProvider from "@core/providers/TranslationProvider";

import initTranslations from "../i18n";

import HomeContent from "./components/HomeContent";

type THomePageProps = TDefaultPageProps;

const HomePage: FC<THomePageProps> = async ({ params, searchParams }) => {
  const [{ locale }, searchParamsResult] = await Promise.all([
    params,
    searchParams,
  ]);

  const { resources } = await initTranslations(locale, i18nNamespaces);

  const page = parseInt(searchParamsResult.page || `${DEFAULT_MOVIES_PAGE}`);

  await queryClient.prefetchQuery({
    queryKey: [FETCH_MOVIES_QUERY_KEY, page],
    queryFn: () => fetchMoviesQuery({ page }),
  });

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
