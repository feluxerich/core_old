import { useEffect, useState } from "react";

function PasswordGenerator() {
  const [password, setPassword] = useState(
    "¯\\_(ツ)_/¯ Password LOL ¯\\_(ツ)_/¯"
  );

  const chars =
    "0123456789" +
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    "!§$%/()´`^°*~#|,:._-€@";

  const generatePassword = () => {
    var result = [];
    for (let i = 0; i < 32; i++) {
      let char = chars.charAt(Math.floor(Math.random() * chars.length));
      result.push(char);
    }
    setPassword(result.join(""));
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => navigator.clipboard.writeText(password)}
        title="Click to Copy"
        className="px-5 py-3 my-3 bg-gray-300 rounded-full dark:bg-gray-900"
      >
        <code>{password}</code>
      </button>
      <button
        className="px-5 py-3 my-3 bg-gray-300 rounded-full dark:bg-gray-900 w-min"
        onClick={generatePassword}
      >
        Regenerate
      </button>
    </div>
  );
}

export default PasswordGenerator;
