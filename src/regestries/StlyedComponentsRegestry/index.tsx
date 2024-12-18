"use client";

import React, { FC, PropsWithChildren, useState } from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

import { useServerInsertedHTML } from "next/navigation";

const StlyedComponentsRegestry: FC<PropsWithChildren> = ({ children }) => {
  const [styleSheets] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styleSheets.getStyleElement();

    styleSheets.instance.clearTag();

    return <>{styles}</>;
  });

  if (typeof window !== "undefined") {
    return <>{children}</>;
  }

  return (
    <StyleSheetManager
      sheet={styleSheets.instance}
      shouldForwardProp={() => true}
    >
      {children}
    </StyleSheetManager>
  );
};

export default StlyedComponentsRegestry;
