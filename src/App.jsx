import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { Store } from "./Components/Store";
import { createTheme } from "@mui/material/styles";

export function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Store />
    </ThemeProvider>
  );
}
