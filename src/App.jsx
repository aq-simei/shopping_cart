import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "styled-components";
import { Store } from "./Components/Store";
import { theme } from "./theme";
import css from "@styled-system/css";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Store />
      <Card>
        <p>This is a styled-component implemented with css function</p>
      </Card>
    </ThemeProvider>
  );
}
const Card = (props) => (
  <div
    {...props}
    css={css({
      background: `${theme.colors.black}`,
      color: `${theme.colors.white}`,
      padding: [`${theme.sizeScale[1]}`, `${theme.sizeScale[2]}`],
      fontSize: `${theme.sizeScale[4]}`,
    })}
  />
);
