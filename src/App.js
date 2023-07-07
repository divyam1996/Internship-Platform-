import { LoginPage } from "./pages/LoginPage/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core';
import theme from "./theme";

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<LoginPage />}>
          <Route index element={<LoginPage />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    // </ThemeProvider>
  );
}

export default App;
