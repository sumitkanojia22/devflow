import { useContext, useState } from "react";
import { DataContext } from "../../DataContext";
import { LoginUserData } from "../../LoginUserData";
import { useNavigate } from "react-router";

function LoginForm() {
  const { managerList, employeeList } = useContext(DataContext);
  const navigate = useNavigate();

  const { setUserData, setLogged } = useContext(LoginUserData);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    const matchUser =
      managerList.find((user) => {
        return user.email_id === email && user.password === password;
      }) ||
      employeeList.find((user) => {
        return user.email_id === email && user.password === password;
      });

    if (matchUser) {
      setLogged(true);
      setUserData(matchUser);
      navigate("/");
    } else {
      console.log("Invalid");
    }
  }

  return (
    <div className="w-full h-screen flex justify-center items-center font-secondary bg-[url(svg/login.svg)] bg-cover">
      <form
        action=""
        className="flex flex-col gap-2 p-8 border-[0.2px] border-zinc-500 rounded-md"
      >
        <h2 className="text-center p-4">DEVFLOW.</h2>
        <label htmlFor="email">Email id </label>
        <input
          className="border-[0.2px] border-zinc-400 rounded-sm outline-none w-[20vw] px-2 py-1 bg-zinc-200/25"
          type="email"
          id="email"
          placeholder="Email id"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          className="border-[0.2px] border-zinc-400 rounded-sm outline-none w-[20vw] px-2 py-1 bg-zinc-200/25"
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <div className="w-full flex justify-center items-center">
          <button
            className="bg-cta px-2 py-1 rounded-sm text-bg"
            type="submit"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
