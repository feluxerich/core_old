import { useEffect, useState } from "react";
import { IoSunnyOutline, IoSunny } from "react-icons/io5";

function ThemeSwitch({ size }) {
  const [darkModeEnabled, setDarkModeEnabled] = useState(true);

  const switchTheme = () => {
    if (localStorage.getItem("theme") === "light") {
      document.documentElement.classList.add("dark");
      setDarkModeEnabled(true);
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      setDarkModeEnabled(false);
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" &&
      !document.documentElement.classList.contains("dark")
    ) {
      document.documentElement.classList.add("dark");
      setDarkModeEnabled(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkModeEnabled(false);
    }
  }, []);

  return (
    <button onClick={switchTheme} className="mt-auto" title="Switch Theme">
      {darkModeEnabled ? (
        <IoSunnyOutline size={size} />
      ) : (
        <IoSunny size={size} />
      )}
    </button>
  );
}

export default ThemeSwitch;
