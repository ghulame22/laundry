import Image from "next/image";
import Rewash from "@/assets/Rewash.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-slate-800 px-28 py-28 flex justify-between">
      <div className="space-y-5">
        <ul className="flex items-center justify-between text-white">
          <div className="flex space-x-28 items-center">
            <li>
              <Link legacyBehavior href="/" passHref>
                <a className="text-xl font-semibold hover:text-amber-400">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/services" passHref>
                <a className="text-xl font-semibold hover:text-amber-400">
                  Services
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about" passHref>
                <a className="text-xl font-semibold hover:text-amber-400">
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about" passHref>
                <a className="text-xl font-semibold hover:text-amber-400">
                  FaQ
                </a>
              </Link>
            </li>
          </div>
        </ul>
        <div className="text-white">
          <h2 className="text-white text-7xl font-extrabold leading-tight">
            Provides High
            <br />
            Quality Laundry
            <br />
            Services
          </h2>
        </div>
        <div className="text-white text-xl font-semibold">
          2021 Ibey Design. Allright reserved
        </div>
      </div>
      <div className="space-y-7">
        <div className="flex items-center space-x-4">
          <div className="rounded-full bg-amber-400 w-20 h-20 flex items-center justify-center">
            <p className=" font-bold text-5xl text-white">R</p>
          </div>
          <Link legacyBehavior href="/" passHref>
            <a className=" font-bold text-xl">
              <Image src={Rewash} width={205} height={38} alt="Laundry Image" />
            </a>
          </Link>
        </div>
        <div className="flex text-white text-xl font-semibold space-x-14">
          <div>
            <ul className="space-y-5">
              <li>Services</li>
              <li>Dry cleaning</li>
              <li>Laundry services</li>
              <li>Leather and suade</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-5">
              <li>Support</li>
              <li>Customer services</li>
              <li>Email us</li>
              <li>Privacy policy</li>
              <li>Terms and conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
