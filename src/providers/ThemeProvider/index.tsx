"use client";

import { FC, PropsWithChildren } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import StlyedComponentsRegestry from "@core/regestries/StlyedComponentsRegestry";
import theme from "@core/theme";

import ThemeGlobalStyles from "@core/theme/global";

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <StlyedComponentsRegestry>
    <StyledThemeProvider theme={theme}>
      <ThemeGlobalStyles />
      {children}
    </StyledThemeProvider>
  </StlyedComponentsRegestry>
);

export default ThemeProvider;
