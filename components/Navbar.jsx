import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-gray-800 h-14 flex flex-row items-center text-white">
      <div className="absolute flex flex-row">
        <p className="text-xl mx-6">core</p>
        <Link href="/" passHref>
          <button className="bg-gray-900 px-3 py-1 rounded-md">Home</button>
        </Link>
        <Link href="/minecraft/hypixel" passHref className="ml-3">
          <button className="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-md">
            Hypixel
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
