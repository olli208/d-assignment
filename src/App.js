import logo from "./logo.svg";
import "./App.css";

import { Main } from "./components/Main";
import { ThemeProvider } from "./theme/theme";

function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}

export default App;
