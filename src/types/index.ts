export type TDefaultPageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Record<string, string | undefined>;
};

export type TDynamicPageProps = {
  params: Promise<{ locale: string; id: string }>;
  searchParams: Record<string, string | undefined>;
};
