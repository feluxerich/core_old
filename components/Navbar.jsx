import { useEffect } from "react";
import jscookie from "jscookie";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-gray-800 h-14 flex flex-row items-center text-white">
      <div className="absolute left-6 flex flex-row">
        <p className="text-xl">core</p>
        <Link href="/" passHref className="ml-6">
          <button className="bg-gray-900 px-3 py-1 rounded-md">Home</button>
        </Link>
        <Link href="/minecraft/hypixel" passHref className="ml-3">
          <button className="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-md">
            Hypixel
          </button>
        </Link>
        <Link href="/10k/" passHref className="ml-3">
          <button className="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-md">
            Klasse 10k PreAlpha
          </button>
        </Link>
        <Link href="/github/" passHref className="ml-3">
          <button className="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-md">
            GitHub
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
