import { LoginPage } from "./pages/LoginPage/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core';
import theme from "./theme";
import RegistrationPage from "./pages/RegistrationPage";
import { Mentor } from "./pages/Mentor/Mentor";
import { Candidates } from "./pages/Mentor/Candidates/Candidates";

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route exact path="/mentor" element={<Mentor />} />
        {/* <Route exact path="/mentor/dashboard" component={Dashboard} /> */}
        <Route path="/mentor/candidates" element={<Candidates />} />
        {/* <Route path="/mentor/candidates" component={Candidates} /> */}
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter >
    // </ThemeProvider>
  );
}

export default App;
