export type TDefaultPageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Record<string, string | undefined>;
};
