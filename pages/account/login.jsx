import { useRouter } from "next/router";
import Link from "next/link";
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
      className="flex flex-col items-center w-full max-w-sm font-bold text-white bg-gradient-to-r from-blue-400 to-green-400 rounded-xl p-7"
      onSubmit={handleSubmit}
    >
      <p className="mb-5 text-3xl">Log In</p>
      <label htmlFor="username" className="flex flex-col">
        Username:
        <input
          type="text"
          id="username"
          className="text-white bg-transparent border-b-2 border-white focus:outline-none"
          value={username}
          onChange={handleUsernameChange}
        />
      </label>
      <label htmlFor="password" className="flex flex-col mt-4">
        Password:
        <input
          type="password"
          id="password"
          className="text-white bg-transparent border-b-2 border-white focus:outline-none"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <button
        type="submit"
        className="pt-1 pb-1 pl-6 pr-6 mt-6 mb-4 font-bold bg-transparent border-2 border-white rounded-xl hover:bg-gray-500 hover:bg-opacity-30"
      >
        Log In
      </button>
      <Link href="/account/signup">Sign Up</Link>
    </form>
  );
}

export default Login;
