//
import { Link } from "react-router";

function Ctabutton({ text }) {
  return (
    <Link
      to="/signup"
      className="
        font-secondary
        rounded-md
        bg-primary
        px-4 py-2
        text-cta-text
        text-[1.2vw]
        sm:text-[1vw]
        whitespace-nowrap
        shadow-sm
        transition-colors
        bg-cta
        hover:bg-cta-hover
        focus:outline-none
      "
    >
      {text}
    </Link>
  );
}

export default Ctabutton;
