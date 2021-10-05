import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleUsernameChange = (e) => {
    setUsername(e.currentTarget.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/account/signup", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
    });
    await fetch("/api/account/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
    });
    router.push("/");
  };

  return (
    <form
      className="bg-gradient-to-r from-blue-400 to-green-400 text-white font-bold max-w-sm w-full rounded-xl flex flex-col items-center mr-auto ml-auto mt-60 p-7"
      onSubmit={onSubmit}
    >
      <p className="text-3xl mb-5">Sign Up</p>
      <label htmlFor="username" className="flex flex-col">
        Username:
        <input
          type="text"
          id="username"
          className="bg-transparent border-b-2 border-white text-white focus:outline-none"
          value={username}
          onChange={handleUsernameChange}
        />
      </label>
      <label htmlFor="password" className="mt-4 flex flex-col">
        Password:
        <input
          type="password"
          id="password"
          className="bg-transparent border-b-2 border-white text-white focus:outline-none"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <button
        type="submit"
        className="mt-6 rounded-xl pl-6 pr-6 pt-1 pb-1 font-bold border-2 border-white bg-transparent hover:bg-gray-500 hover:bg-opacity-30"
      >
        Sign Up
      </button>
      <Link href="/account/login" className="mt-4">
        Log In
      </Link>
    </form>
  );
}

export default SignUp;
