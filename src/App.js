import { LoginPage } from "./pages/LoginPage/LoginPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import { Mentor } from "./pages/Mentor/Mentor";
import { Candidates } from "./pages/Mentor/Candidates/Candidates";
import { Projects } from "./pages/Mentor/Projects/Projects";
import { Candidate } from "./pages/Candidate/Candidate";
import { Application } from "./pages/Candidate/Application";
import { useDispatch, useSelector } from "react-redux";
import { Admin } from "./pages/Admin/Admin";
import { Mentors } from "./pages/Admin/Mentors";

function App() {
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  const resRole = userInfo?.user?.role;
  console.log(resRole);
  console.log(userLogin);
  return (
    // <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        {resRole ? (

          <>

            {resRole == "Mentor" && (

              <>

                <Route path="/mentor" element={<Mentor />} />

                <Route path="/mentor/candidates" element={<Candidates />} />
                <Route path="/mentor/projects" element={<Projects />} />

              </>

            )}

            {resRole == "Candidate" && (
              <>
                <Route exact path="/candidate" element={<Candidate />} />
                <Route exact path="/candidate/applications" element={<Application />} />
              </>
            )}

            {resRole == "Admin" && (
              <>
                <Route exact path="/admin" element={<Admin />} />
                <Route exact path="/admin/mentors" element={<Mentors />} />
              </>
            )}

          </>

        ) : (

          <>

            {console.log("53553")}


            <Route path="/login" element={<LoginPage />} />

            <Route path="/register" element={<RegistrationPage />} />

          </>

        )}
        {/* <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route exact path="/mentor" element={<Mentor />} />
        <Route path="/mentor/candidates" element={<Candidates />} />
        <Route path="/mentor/projects" element={<Projects />} />
        <Route exact path="/candidate" element={<Candidate />} />
        <Route exact path="/candidate/applications" element={<Application />} />
        <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter >
    // </ThemeProvider>
  );
}

export default App;
