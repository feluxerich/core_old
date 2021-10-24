import { useEffect, useState } from "react";
import { IoLogInOutline, IoLogOutOutline } from "react-icons/io5";
import Link from "next/link";
import jscookie from "jscookie";

function UserButton() {
  const [loggedIn, setLoggedIn] = useState(false);

  const logOut = () => {
    jscookie.del("jwt");
  };

  useEffect(() => {
    if (jscookie.get("jwt")) {
      console.log(1);
      setLoggedIn(true);
    } else {
      console.log(2);
      setLoggedIn(false);
    }
  }, []);

  return loggedIn ? (
    <button className="m-3" onClick={logOut} title="Log Out">
      <IoLogOutOutline size="24px" />
    </button>
  ) : (
    <Link href="/account/login" passHref>
      <button className="m-3" title="Log In">
        <IoLogInOutline size="24px" />
      </button>
    </Link>
  );
}

export default UserButton;
