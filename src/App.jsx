import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import DashBoard from "./pages/DashBoard";
import { DataProvider } from "./DataContext";
import { LoginUserDataProvider } from "./LoginUserData";

function App() {
  return (
    <DataProvider>
      <LoginUserDataProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </LoginUserDataProvider>
    </DataProvider>
  );
}

export default App;
