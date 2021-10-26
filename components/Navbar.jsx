import NavbarLink from "@components/NavbarLink";
import * as icons from "react-icons/io5";
import ThemeSwitch from "@components/ThemeSwitch";
import config from "@config/navbar";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 flex flex-col items-center w-16 h-screen py-3 m-0 text-gray-900 bg-gray-300 shadow-lg dark:text-white dark:bg-gray-900 hover:w-64">
      {config.items.map(({ route, icon: iconKey, name, disabled }, i) => {
        const icon = icons[iconKey];

        return (
          <NavbarLink
            route={route}
            icon={icon}
            name={name}
            disabled={disabled}
            key={i}
          />
        );
      })}

      <ThemeSwitch size="24px" />
    </nav>
  );
}

export default Navbar;
