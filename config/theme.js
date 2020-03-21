import { lighten } from "polished";

// themeColor: "#8B0000",
// backgroundColor: "#2b2e3c"

//  themeColor: "#FFF4F4",
//   backgroundColor: "#3226FF"
// #9B80D7
// #48A7E4
//#F7D300
//#0B3160
//E73E18

const colors = {
  primary: "#E73E18", // Color for buttons or links
  secondary: "#F7D300",
  primaryLight: lighten(0.05, "#E73E18"),
  bgLight: lighten(0.05, "#0B3160"),
  bg: "#0B3160", // Background color
  grey: {
    dark: "rgba(255, 255, 255, 0.9)",
    default: "rgba(255, 255, 255, 0.7)",
    light: "rgba(255, 255, 255, 0.5)",
    ultraLight: "rgba(255, 255, 255, 0.25)"
  },
  dark: {
    dark: "rgba(0, 0, 0, 0.9)",
    default: "rgba(0, 0, 0, 0.7)",
    light: "rgba(0, 0, 0, 0.5)",
    ultraLight: "rgba(0, 0, 0, 0.25)"
  },
  white: "white"
};

const transitions = {
  normal: "0.5s"
};

const fontSize = {
  small: "0.9rem"
};

const fontFamily = {
  // serif: `'Bitter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', serif`,
  sansSerif: `'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif`
};

const breakpoints = {
  tablet: "1200px",
  phone: "600px"
};

const theme = {
  colors,
  transitions,
  fontSize,
  breakpoints,
  fontFamily,
  maxWidth: "800px",
  baseFontSize: "18px"
};

export default theme;
