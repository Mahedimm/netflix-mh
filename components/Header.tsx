import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const router = useRouter();
  const { logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center  space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          alt="logo"
          width={100}
          height={100}
          className="cursor-pointer object-container"
        />
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link href={"/"} className={`headerLink `}>
              <a
                className={
                  router.pathname === "/"
                    ? "text-red-600 font-semibold"
                    : "text-white"
                }
              >
                Home
              </a>
            </Link>
          </li>

          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden sm:inline w-6 h-6  " />
        <p className="hidden lg:inline cursor-pointer">Kids</p>
        <BellIcon className="h-6 w-6 " />
        {/* <Link href="/account"> */}
        <img
          onClick={logout}
          src="https://rb.gy/g1pwyx"
          alt=""
          className="cursor-pointer rounded"
        />
        {/* </Link> */}
      </div>
    </header>
  );
};

export default Header;
