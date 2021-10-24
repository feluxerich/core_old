import NavbarLink from "@components/NavbarLink";
import { IoCube, IoHome, IoAlbums, IoLogoGithub } from "react-icons/io5";
import ThemeSwitch from "@components/ThemeSwitch";
import UserButton from "@components/UserButton";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 flex flex-col items-center w-16 h-screen py-3 m-0 text-gray-900 bg-gray-300 shadow-lg dark:text-white dark:bg-gray-900">
      <NavbarLink href="/" icon={<IoHome size="24px" />} title="Home" />
      <NavbarLink
        href="/minecraft/hypixel"
        icon={<IoCube size="24px" title="Hypixel" />}
      />
      <NavbarLink
        href="/lol_builds"
        icon={<IoAlbums size="24px" title="Fun League Builds" />}
        disabled={true}
      />
      <NavbarLink
        href="https://github.com/feluxerich/core"
        icon={<IoLogoGithub size="24px" />}
        title="GitHub"
      />
      <ThemeSwitch size="24px" />
      <UserButton />
    </nav>
  );
}

export default Navbar;
