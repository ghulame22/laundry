import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-blue-400 px-28 p-4">
      <div>
        <ul className="flex items-center justify-between text-white">
          <div className="flex items-center space-x-2">
            <div className="rounded-full bg-amber-400 w-8 h-8 flex items-center justify-center">
              <p className=" font-bold text-xl">R</p>
            </div>
            <li>
              <Link legacyBehavior href="/" passHref>
                <a className=" font-bold text-xl">Rewash</a>
              </Link>
            </li>
          </div>
          <div className="flex space-x-28 items-center">
            <li>
              <Link legacyBehavior href="/" passHref>
                <a className="text-lg font-semibold hover:text-amber-400">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/services" passHref>
                <a className="text-lg font-semibold hover:text-amber-400">
                  Services
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about" passHref>
                <a className="text-lg font-semibold hover:text-amber-400">
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about" passHref>
                <a className="text-lg font-semibold hover:text-amber-400">
                  FaQ
                </a>
              </Link>
            </li>
            <li>
              <button className="bg-amber-400 py-4 px-12 rounded-lg text-white text-lg font-semibold">
                Contact Us
              </button>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
