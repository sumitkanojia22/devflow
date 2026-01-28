function LoginForm() {
  return (
    <div className="w-full h-screen flex justify-center items-center font-secondary bg-[url(svg/login.svg)] bg-cover">
      <form
        action=""
        className="flex flex-col gap-2 p-8 border-[0.2px] border-zinc-500 rounded-md"
      >
        <h2 className="text-center p-4">DEVFLOW.</h2>
        <label htmlFor="">Username</label>
        <input
          className="border-[0.2px] border-zinc-400 rounded-sm outline-none w-[20vw] px-2 py-1 bg-zinc-200/25"
          type="text"
          placeholder="Username"
        />
        <label htmlFor="">Password</label>
        <input
          className="border-[0.2px] border-zinc-400 rounded-sm outline-none w-[20vw] px-2 py-1 bg-zinc-200/25"
          type="password"
          placeholder="Password"
          name=""
          id=""
        />

        <div className="w-full flex justify-center items-center">
          <button className="bg-cta px-2 py-1 rounded-sm text-bg">Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
