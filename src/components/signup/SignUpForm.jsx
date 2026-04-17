import { useContext, useState } from "react";
import { DataContext } from "../../DataContext";

function SignUpForm() {
  const { managerList, setManagerList, employeeList, setEmployeeList } =
    useContext(DataContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("manager");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  function handleSignUp(e) {
    console.log(role);
    e.preventDefault();
    if (password === confirmpassword && role === "manager") {
      const newManager = {
        id: Date.now(),
        role: role,
        name: username,
        email_id: email,
        password: password,
      };

      const updatedList = [...managerList, newManager];

      setManagerList(updatedList);
      localStorage.setItem("managers", JSON.stringify(updatedList));
    } else if (password === confirmpassword && role === "employee") {
      const newEmployee = {
        id: Date.now(),
        role: role,
        name: username,
        email_id: email,
        password: password,
      };

      const updatedList = [...employeeList, newEmployee];

      setEmployeeList(updatedList);
      localStorage.setItem("employees", JSON.stringify(updatedList));
    } else {
      alert("password not matching");
    }
  }

  return (
    <div className="w-full h-screen flex justify-center items-center font-secondary bg-[url(svg/signup.svg)] bg-cover">
      <form
        action=""
        className="flex flex-col gap-2 p-8 border-[0.2px] border-zinc-500 rounded-md"
      >
        <h2 className="text-center p-4">DEVFLOW.</h2>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          className="border-[0.2px] border-zinc-400 rounded-sm outline-none w-[20vw] px-2 py-1 bg-zinc-200/25"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label htmlFor="email">E-mail</label>
        <input
          className="border-[0.2px] border-zinc-400 rounded-sm outline-none w-[20vw] px-2 py-1 bg-zinc-200/25"
          type="email"
          placeholder="E-mail"
          name="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <div className="flex gap-x-4 my-2 items-center">
          <label htmlFor="role">Select Role</label>
          <select
            className="border-[0.2px] border-zinc-400 rounded-sm outline-none w-fit py-1 bg-zinc-200/25 px-4 "
            name="role"
            id="role"
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
            }}
          >
            <option value="manager">Manager</option>
            <option value="employee">Employee</option>
          </select>
        </div>

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
        <label htmlFor="confirmpassword">Confirm Password</label>
        <input
          className="border-[0.2px] border-zinc-400 rounded-sm outline-none w-[20vw] px-2 py-1 bg-zinc-200/25"
          type="password"
          placeholder="Confirm Password"
          name="confirmpassword"
          id="confirmpassword"
          value={confirmpassword}
          onChange={(e) => {
            setConfirmpassword(e.target.value);
          }}
        />

        <div className="w-full flex justify-center items-center">
          <button
            type="submit"
            onClick={handleSignUp}
            className="bg-cta px-2 py-1 rounded-sm text-bg"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
