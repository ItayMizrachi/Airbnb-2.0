import Image from "next/image";
import React, { useEffect, useRef } from "react";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

const Header = ({ selectedTheme, setSelectedTheme, themes }) => {
  const drawerToggleRef = useRef(null);

  const closeDrawer = () => {
    if (drawerToggleRef.current) {
      drawerToggleRef.current.click();
    }
  };

  useEffect(() => {
    localStorage.setItem("selectedTheme", selectedTheme);
  }, [selectedTheme]);

  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value);
    // Apply theme change logic here
    // console.log(selectedTheme);
  };

  return (
    <header className="drawer drawer-end z-20 sticky top-0 shadow-md p-5 md:px-10 bg-base-100 grid grid-cols-3">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* Left */}
      <div className="px-2 mx-2 relative flex items-center h-full w-24 cursor-pointer my-auto ">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Left */}

      {/* Middle */}
      <div className="flex justify-between items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          className="flex-frow bg-transparent focus:outline-none pl-5 text-sm text-gray-600 placeholder-gray-400"
        />
        <SearchIcon className="hidden lg:inline-flex w-8 h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {/* Middle */}

      {/* right */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden lg:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full ">
          <label ref={drawerToggleRef} htmlFor="my-drawer-4" className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
      {/* <select
        className="select font-semibold ml-auto text-base w-full max-w-[140px] hover:bg-base-content/10 focus:bg-base-content/10 focus:border-none focus:outline-none hidden lg:block"
        value={selectedTheme}
        onChange={handleThemeChange}
      >
        {themes.map((theme) => (
          <option className="bg-base-100" key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </select> */}

      {/* right */}

      {/*drawer content here */}
      <div className="drawer-side ">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 ">
          {/* Sidebar content here */}
          <li>
            <select
              className="select font-semibold text-base w-full hover:bg-base-content/10 focus:bg-base-content/10 focus:border-none focus:outline-none "
              value={selectedTheme}
              onChange={handleThemeChange}
            >
              {themes.map((theme) => (
                <option className="bg-base-100" key={theme} value={theme}>
                  {theme}
                </option>
              ))}
            </select>
          </li>
          <li
            className="p-[14px] font-semibold text-base hover:bg-base-100 rounded-lg cursor-pointer"
            onClick={() => closeDrawer()}
          >
            Home
          </li>

          <li
            className="p-[14px] font-semibold text-base hover:bg-base-100 rounded-lg cursor-pointer"
            onClick={() => closeDrawer()}
          >
            Library
          </li>
          <li
            className="p-[14px] font-semibold text-base hover:bg-base-100 rounded-lg cursor-pointer"
            onClick={() => closeDrawer()}
          >
            Store
          </li>
          <li
            className="p-[14px] font-semibold text-base hover:bg-base-100 rounded-lg cursor-pointer"
            onClick={() => closeDrawer()}
          >
            Cars
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
