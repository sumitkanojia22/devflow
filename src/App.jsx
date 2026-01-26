import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
