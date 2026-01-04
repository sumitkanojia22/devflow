import Ctabutton from "./Ctabutton";

function Navbar() {
  return (
    <nav className="grid grid-cols-12 gap-x-2 p-4">
      <div className="col-start-2 flex items-center">
        <h4>Devflow</h4>
      </div>

      <ul className="col-start-5 col-end-9 flex items-center justify-evenly font-secondary">
        <a href="#">Features</a>
        <a href="#">How it works</a>
        <a href="#">Pricing</a>
      </ul>

      <div className=" col-end-12 flex items-center font-secondary">
        <Ctabutton text={"Start free Trial"} />
      </div>
    </nav>
  );
}

export default Navbar;
