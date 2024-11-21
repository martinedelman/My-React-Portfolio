import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <header className="absolute flex flex-row m-4 px-8 justify-center bg-slate-800 rounded-full">
      {location.pathname === "/" ? (
        <a href="/" className="px-4 py-2 mx-2 text-white font-mono flex flex-row">
          <span className="text-orange-400">&lt;</span>
          <p>Home </p>
          <span className="text-orange-400">/&gt;</span>
        </a>
      ) : (
        <a
          href="/"
          className="px-4 py-2 mx-2 text-white/25 active:text-white hover:text-white/85 font-mono "
        >
          <p className="">Home</p>
        </a>
      )}
      <a
        href="/skills"
        className="px-4 py-2 mx-2 text-white/25 active:text-white hover:text-white/85 font-mono"
      >
        <p className="">Skills</p>
      </a>
      <a
        href="/projects"
        className="px-4 py-2 mx-2 text-white/25 active:text-white hover:text-white/85 font-mono"
      >
        <p className="">Projects</p>
      </a>
      <a
        href="/about"
        className="px-4 py-2 mx-2 text-white/25 active:text-white hover:text-white/85 font-mono"
      >
        <p className="">About</p>
      </a>
      <a
        href="/contact"
        className="px-4 py-2 mx-2 text-white/25 active:text-white hover:text-white/85 font-mono"
      >
        <p className="">Contact</p>
      </a>
    </header>
  );
};

export default Header;
