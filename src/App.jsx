import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
