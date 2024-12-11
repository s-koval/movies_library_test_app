"use client";

import StlyedComponentsRegestry from "@core/regestries/StlyedComponentsRegestry";
import theme from "@core/theme";
import { FC, PropsWithChildren } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <StlyedComponentsRegestry>
    <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
  </StlyedComponentsRegestry>
);

export default ThemeProvider;
