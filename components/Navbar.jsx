import { useEffect } from "react";
import jscookie from "jscookie";

function Navbar() {
  return (
    <nav className="bg-gray-800 h-14 flex flex-row items-center text-white">
      <div className="absolute left-6 flex flex-row">
        <p className="text-xl">core</p>
        <a href="/" className="ml-6">
          <button className="bg-gray-900 px-3 py-1 rounded-md">Home</button>
        </a>
        <a href="/minecraft/hypixel" className="ml-3">
          <button className="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-md">
            Hypixel
          </button>
        </a>
        <a href="/10k/" className="ml-3">
          <button className="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-md">
            Klasse 10k PreAlpha
          </button>
        </a>
        <a href="/github/" className="ml-3">
          <button className="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-md">
            GitHub
          </button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
