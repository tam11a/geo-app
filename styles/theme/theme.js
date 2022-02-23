import { createTheme } from "@mui/material/styles";

// colors
const primary = "#FFEB50";
const secondary = "#FFFFFF";
const black = "#282c34";
const blackDark = "#15191e";
const blackLight = "#33373E";

// breakpoints
const breakpoints = {
  // for responsiveness
  values: {
    xs: 0,
    xms: 380,
    sm: 600, // Phone
    md: 900, // Tablet/Laptop
    lg: 1200, // Desktop
    xl: 1536,
  },
};
const theme = createTheme({
  breakpoints: breakpoints,
  palette: {
    primary: {
      main: primary,
      contrastText: black,
    },
    secondary: {
      main: secondary,
      contrastText: black,
    },
    black: {
      main: black,
      dark: blackDark,
      light: blackLight,
      contrastText: primary,
    },
    background: {
      default: black,
      paper: black,
    },
    text: {
      primary: secondary,
      secondary: primary,
    },
  },
  typography: {
    fontFamily: "'Quicksand', sans-serif",
  },
  components: {},
});

export default theme;
