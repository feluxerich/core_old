import Link from "next/link";

function NavbarLink({ href, icon, title, disabled }) {
  return (
    <Link href={href} passHref>
      <button
        className="m-1.5 dark:hover:bg-gray-700 hover:bg-gray-400 p-2 rounded-full flex items-center w-min disabled:opacity-50 disabled:cursor-not-allowed"
        title={title}
        disabled={disabled}
      >
        {icon}
      </button>
    </Link>
  );
}

export default NavbarLink;
