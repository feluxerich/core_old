import NavbarLink from "./NavbarLink";

function Navbar() {
  return (
    <nav className="bg-gray-800 h-14 flex flex-row items-center text-white">
      <div className="flex flex-row">
        <p className="text-xl mx-6">core</p>
        <i className="x-separator"></i>
        <NavbarLink href="/" title="Home" />
        <NavbarLink href="/minecraft/hypixel" title="Hypixel" />
      </div>
    </nav>
  );
}

export default Navbar;
