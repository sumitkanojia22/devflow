import { Link } from "react-router";

function Ctabutton({ text }) {
  return (
    <Link
      className="
      whitespace-nowrap
    bg-cta
    text-(--color-cta-text)
    hover:bg-cta-hover
    rounded-md
    shadow-(--shadow-sm)
    px-4 py-2
  "
    >
      {text}
    </Link>
  );
}

export default Ctabutton;
