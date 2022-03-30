const colors = {
  black: "#262626",
  white: "#fff",
  dark_red: "#B3001B",
  light_blue: "#7ea3cc",
  mid_blue: "#255c99",
  mid_green: "#3D583A",
};
const backGroundColors = {
  white: "#fff",
  black: "#262626",
  grey: "#999999",
  mid_blue: "#255c99",
};
const fonts = { body: "Roboto, sans-serif" };

const fontSize = [
  0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3,
].map((v) => `${v}rem`);

const fontWeights = [300, 400, 500, 600, 700, 800];

export const theme = {
  colors,
  backGroundColors,
  fonts,
  fontSize,
  fontWeights,
};
