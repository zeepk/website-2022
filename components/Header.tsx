import { Icon } from "icons";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "./Link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { pathname } = useRouter();

  const handleCloseMenu = () => {
    setIsOpen(false);
    setIsHidden(true);
  };

  const handleOpenMenu = () => {
    setIsOpen(true);
    setIsHidden(false);
  };

  useEffect(() => setMounted(true), []);

  return (
    <>
      <div
        className={`absolute z-20 w-screen h-2/5 bg-zinc-500/400 ${
          isOpen
            ? "translate-y-0 ease-out duration-500"
            : "-translate-y-full ease-in duration-500"
        }`}
      >
        <header className="relative w-screen h-full transition blur-none bg-white dark:bg-[#141318]">
          <button className="absolute left-6 top-6" onClick={handleCloseMenu}>
            <Icon.CloseMenu />
          </button>
          <ul className="flex flex-col items-center justify-between h-full pt-6 [&>li]:w-full">
            <li>
              <Link
                to="/"
                active={pathname === "/"}
                onNavigate={handleCloseMenu}
                full
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                active={pathname === "/about"}
                onNavigate={handleCloseMenu}
                full
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                active={pathname === "/portfolio"}
                onNavigate={handleCloseMenu}
                full
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                active={pathname === "/blog"}
                onNavigate={handleCloseMenu}
                full
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/stack"
                active={pathname === "/stack"}
                onNavigate={handleCloseMenu}
                full
              >
                Stack
              </Link>
            </li>
          </ul>
        </header>
      </div>
      <header className="container flex justify-between max-w-3xl pt-6 pb-3 mx-auto sm:py-6 md:py-10 px-7 md:pr-10 md:pl-7">
        <button className="flex md:hidden" onClick={handleOpenMenu}>
          <Icon.OpenMenu />
        </button>
        <ul className="justify-between ring-1 ring-black/10 dark:ring-white/10 hover:ring-2 transition duration-100 hover:ring-cyan-600 dark:hover:ring-cyan-400 rounded-lg hidden bg-white/10 dark:bg-[#141318] backdrop-blur-sm md:flex">
          <div className="flex items-center [&>li]:h-full">
            <li>
              <Link start to="/" active={pathname === "/"}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" active={pathname === "/about"}>
                About
              </Link>
            </li>
            <li>
              <Link to="/portfolio" active={pathname === "/portfolio"}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/blog" active={pathname === "/blog"}>
                Blog
              </Link>
            </li>
            <li>
              <Link end to="/stack" active={pathname === "/stack"}>
                Stack
              </Link>
            </li>
          </div>
        </ul>
        {mounted && (
          <div className="flex items-center visible">
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? <Icon.DarkMode /> : <Icon.LightMode />}
            </button>
          </div>
        )}
      </header>
      <div
        onClick={handleCloseMenu}
        className={`absolute top-0 z-10 h-full w-full transition-all duration-500 bg-zinc-500/40 backdrop-blur-sm ${
          isOpen ? "opacity-100" : "opacity-0"
        } ${isHidden ? "invisible" : "visible"}`}
      ></div>
    </>
  );
};

export default Header;
