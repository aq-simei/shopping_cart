import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { Store } from "./Components/Store";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/theme";

const theme = { theme };

export function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Store />
    </ThemeProvider>
  );
}
