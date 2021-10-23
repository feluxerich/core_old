import Link from "next/link";

function NavbarLink({ href, icon }) {
  return (
    <Link href={href} passHref>
      <button className="m-1.5 hover:bg-gray-700 dark:hover:bg-gray-400 p-2 rounded-full flex items-center w-min">
        {icon}
      </button>
    </Link>
  );
}

export default NavbarLink;
