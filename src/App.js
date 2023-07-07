import { LoginPage } from "./pages/LoginPage/LoginPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core';
import theme from "./theme";
import RegistrationPage from "./pages/RegistrationPage";
import { Mentor } from "./pages/Mentor/Mentor";

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegistrationPage} />
        <Route path="/mentor" component={Mentor} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Switch>
    </BrowserRouter >
    // </ThemeProvider>
  );
}

export default App;
