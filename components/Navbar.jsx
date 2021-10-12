import Link from "next/link";
import NavbarLink from "./NavbarLink";

function Navbar() {
  return (
    <nav className="bg-gray-800 h-14 flex flex-row items-center text-white">
      <div className="flex flex-row">
        <p className="text-xl mx-6">core</p>
        <Link href="/" passHref>
          <button className="mx-1.5 bg-gray-900 px-3 py-1 rounded-md">
            Home
          </button>
        </Link>
        <NavbarLink href="/minecraft/hypixel" title="Hypixel" />
      </div>
    </nav>
  );
}

export default Navbar;
