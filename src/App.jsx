import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "styled-components";
import { Store } from "./Components/Store";
import { theme } from "./theme";
import styled from "styled-components";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Store />
      <Card>
        <p>Teste de styled-components</p>
      </Card>
    </ThemeProvider>
  );
}

const Card = styled.div`
  color: ${theme.colors.white};
  background: ${theme.backGroundColors.black};
`;
