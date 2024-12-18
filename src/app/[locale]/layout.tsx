import { dir } from "i18next";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";

import { Montserrat } from "next/font/google";

import i18nConfig from "@core/configs/i18n";
import DefaultLayout from "@core/layouts/DefaultLayout";

import QueryProvider from "@core/providers/QueryProvider";
import ThemeProvider from "@core/providers/ThemeProvider";


import "react-toastify/dist/ReactToastify.css";

const monserrat = Montserrat({
  subsets: ["latin"],
});

type TRootLayoutProps = Readonly<
  {
    children: React.ReactNode;
    params: Promise<{ locale: string }>
  }
>;

export const metadata: Metadata = {
  title: "Movies library App",
  description: "Movies library",
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

const RootLayout = async ({ children, params }: TRootLayoutProps) => {
  const { locale } = await params;

  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={monserrat.className}>
        <QueryProvider>
          <ThemeProvider>
            <DefaultLayout>{children}</DefaultLayout>
            <ToastContainer />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
