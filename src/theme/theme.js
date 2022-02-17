import { useEffect, useState } from "react";
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from "styled-components";
import { spacing } from "./spacing";
import { typography } from "./typography";

export const theme = {
  spacing: { ...spacing },
  typography: { ...typography },
  palette: {
    primary: {
      white: "#ffffff",
      lightGrey: "#F3F3F3",
      charcoal: "#242424",
      blue: "#B7CBD8",
      green: "#A4A897",
      brown: "#C3BDB8",
    },
    display: {
      black: "#000000",
      blue: "#B7CBD8",
      green: "#A4A897",
      warningOrange: "#E7AC63",
      warningRed: "#E37B6D",
    },
    messaging: {
      warning: "#E7AC63",
      error: "#E37B6D",
      success: "#66A96F",
    },
  },
  dropShadow: {
    level_01: "drop-shadow(0px 4px 12px rgba(186, 199, 213, 0.5))",
    level_02: "drop-shadow(0px 24px 30px rgba(0, 0, 0, 0.08))",
  },
};

const GlobalStyle = createGlobalStyle`
  * {  box-sizing: border-box;}
  body {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    background:  ${({ theme }) =>
      theme.view === "xl"
        ? theme.palette.primary.lightGrey
        : theme.palette.primary.white};
  }
`;

export const ThemeProvider = ({ children }) => {
  const [view, setView] = useState("xl");

  useEffect(() => {
    const mediaQueryMobile = window.matchMedia("(max-width: 767px)");
    const mediaQueryTablet = window.matchMedia("(max-width: 1023px)");
    const mediaQueryDesktop = window.matchMedia("(min-width: 1024px)");

    const handleMobileChange = (e) => {
      if (e.matches) {
        setView("sm");
      }
    };

    const handleTabletChange = (e) => {
      if (e.matches) {
        setView("md");
      }
    };

    const handleDesktopChange = (e) => {
      if (e.matches) {
        setView("xl");
      }
    };

    mediaQueryMobile.addListener(handleMobileChange);
    mediaQueryTablet.addListener(handleTabletChange);
    mediaQueryDesktop.addListener(handleDesktopChange);

    // Initial check
    handleMobileChange(mediaQueryMobile);
    handleTabletChange(mediaQueryTablet);
    handleDesktopChange(mediaQueryDesktop);
  }, []);

  return (
    <StyledThemeProvider theme={{ ...theme, view }}>
      <GlobalStyle theme={{ ...theme, view }} />
      {children}
    </StyledThemeProvider>
  );
};
