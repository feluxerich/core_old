import Link from "next/link";

function NavbarLink({ href, title }) {
  return (
    <Link href={href} passHref>
      <button className="mx-1.5 bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-md">
        {title}
      </button>
    </Link>
  );
}

export default NavbarLink;
