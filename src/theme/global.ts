import { createGlobalStyle } from "styled-components";

const ThemeGlobalStyles = createGlobalStyle(
  (props) => `
    :root {
        color-scheme: light dark;
        color: ${props.theme.colors.neutral[0]};
        background-color: ${props.theme.colors.secondary[500]};

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html {
        overscroll-behavior: none;
    }

    ul,
    ol {
        padding: 0;
    }

    body {
        margin: 0;
        min-width: 320px;
    }

    &::-webkit-scrollbar {
      width: 3px; 
      height: 3px; 
    }

    &::-webkit-scrollbar-track {
      background: transparent; 
      border-radius: 100vw; 
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px; 
    }
`
);

export default ThemeGlobalStyles;
