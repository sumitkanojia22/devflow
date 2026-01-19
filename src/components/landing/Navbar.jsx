import Ctabutton from "./Ctabutton";

function Navbar() {
  return (
    <nav className="grid grid-cols-12 gap-x-2 p-4 sticky top-0 z-10 backdrop-blur-lg">
      <div className="col-start-2 flex items-center">
        <h4>Devflow</h4>
      </div>

      <ul className="xl:col-start-5 xl:col-end-9 xl:flex items-center justify-evenly font-secondary md:hidden hidden">
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#">How it works</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
      </ul>

      <div className=" col-end-12 flex items-center font-secondary">
        <Ctabutton text={"Sign up"} />
      </div>
    </nav>
  );
}

export default Navbar;
