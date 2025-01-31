import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaults";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Initial Project Setup</h1>
    </ThemeProvider>
  )
}
