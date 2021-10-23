import NavbarLink from "@components/NavbarLink";
import { IoCube, IoHome, IoAlbums } from "react-icons/io5";
import ThemeSwitch from "@components/ThemeSwitch";
import UserButton from "@components/UserButton";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 flex flex-col items-center w-16 h-screen py-3 m-0 text-white bg-gray-900 shadow-lg dark:bg-gray-300 dark:text-gray-900">
      <NavbarLink href="/" icon={<IoHome size="24px" />} />
      <NavbarLink href="/minecraft/hypixel" icon={<IoCube size="24px" />} />
      <NavbarLink href="/lol_builds" icon={<IoAlbums size="24px" />} />
      <ThemeSwitch size="24px" />
      <UserButton />
    </nav>
  );
}

export default Navbar;
