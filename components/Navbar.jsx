import NavbarLink from "@components/NavbarLink";
import {
  IoCube,
  IoHardwareChip,
  IoAlbums,
  IoLogoGithub,
  IoServer,
  IoBeer,
  IoCodeSlash,
  IoQrCode,
  IoReader,
  IoTerminal,
  IoLockClosed,
  IoPeople,
} from "react-icons/io5";
import ThemeSwitch from "@components/ThemeSwitch";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 flex flex-col items-center w-16 h-screen py-3 m-0 text-gray-900 bg-gray-300 shadow-lg dark:text-white dark:bg-gray-900">
      <NavbarLink href="/" icon={<IoHardwareChip size="24px" />} title="Home" />
      <NavbarLink
        href="/minecraft/hypixel"
        icon={<IoCube size="24px" title="Hypixel" />}
      />
      <NavbarLink
        href="https://github.com/feluxerich/core"
        icon={<IoLogoGithub size="24px" />}
        title="Repository"
      />
      <NavbarLink
        href="https://klausewindsbach.de"
        icon={<IoBeer size="24px" />}
        title="Klause Windsbach"
      />
      <NavbarLink
        href="/server_manager"
        icon={<IoServer size="24px" />}
        title="Server Manager"
        disabled
      />
      <NavbarLink
        href=""
        icon={<IoCodeSlash size="24px" />}
        title="Codespace"
        disabled
      />
      <NavbarLink
        href=""
        icon={<IoTerminal size="24px" />}
        title="Terminal Portfolio"
        disabled
      />
      <NavbarLink
        href=""
        icon={<IoReader size="24px" />}
        title="Blog"
        disabled
      />
      <NavbarLink
        href="/password_generator"
        icon={<IoLockClosed size="24px" />}
        title="Password Generator"
      />
      <NavbarLink
        href=""
        icon={<IoQrCode size="24px" />}
        title="QR Code Generator"
        disabled
      />
      <NavbarLink
        href="/lol_builds"
        icon={<IoAlbums size="24px" />}
        title="Fun League Builds"
        disabled
      />
      <NavbarLink
        href="/"
        icon={<IoPeople size="24px" />}
        title="Teams"
        disabled
      />

      <ThemeSwitch size="24px" />
    </nav>
  );
}

export default Navbar;
