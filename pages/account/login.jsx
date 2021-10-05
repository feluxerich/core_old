import { useRouter } from "next/router";
import { Link } from "next/link";
import { useState } from "react";
import jscookie from "jscookie";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleUsernameChange = (e) => {
    setUsername(e.currentTarget.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.currentTarget.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var resp = await fetch("/api/account/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (resp.status === 200) {
      jscookie.set({
        name: "jwt",
        value: (await resp.json()).token,
        exdays: 1,
      });
      router.push("/");
    }
  };

  return (
    <form
      className="bg-gradient-to-r from-blue-400 to-green-400 text-white font-bold max-w-sm w-full rounded-xl flex flex-col items-center mr-auto ml-auto mt-60 p-7"
      onSubmit={handleSubmit}
    >
      <p className="text-3xl mb-5">Log In</p>
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
        Log In
      </button>
      <Link href="/account/signup" className="mt-4">
        Sign Up
      </Link>
    </form>
  );
}

export default Login;
