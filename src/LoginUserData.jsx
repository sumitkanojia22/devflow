import { createContext, useState } from "react";

const LoginUserData = createContext();

function LoginUserDataProvider({ children }) {
  const [userData, setUserData] = useState("");
  const [logged, setLogged] = useState(false);
  return (
    <>
      <LoginUserData.Provider
        value={{ userData, setUserData, logged, setLogged }}
      >
        {children}
      </LoginUserData.Provider>
    </>
  );
}

export { LoginUserData, LoginUserDataProvider };
