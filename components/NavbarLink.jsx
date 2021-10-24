import Link from "next/link";

function NavbarLink({ href, icon, title }) {
  return (
    <Link href={href} passHref>
      <button
        className="m-1.5 dark:hover:bg-gray-700 hover:bg-gray-400 p-2 rounded-full flex items-center w-min"
        title={title}
      >
        {icon}
      </button>
    </Link>
  );
}

export default NavbarLink;
