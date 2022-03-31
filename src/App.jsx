import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "styled-components";
import { Store } from "./Components/Store";
import { theme } from "./theme";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Store />
    </ThemeProvider>
  );
}
