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
        <p>Esse é o teste com a função css</p>
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
    })}
  />
);
