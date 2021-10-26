import Link from "next/link";

function NavbarLink({ route, icon: Icon, name, disabled }) {
  return (
    <Link href={route} passHref>
      <button
        className="m-1.5 flex flex-row p-2 dark:hover:bg-gray-700 hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
        title={name}
        disabled={disabled}
      >
        <Icon size="24px" />
        <span className="overflow-hidden whitespace-nowrap title">{name}</span>
      </button>
    </Link>
  );
}

export default NavbarLink;
