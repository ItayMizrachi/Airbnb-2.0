import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useRouter } from "next/router";

const Header = ({ selectedTheme, setSelectedTheme, themes, placeholder }) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const drawerToggleRef = useRef(null);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

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
      <div
        onClick={() => router.push("/")}
        className="px-2 mx-2 relative flex items-center h-full w-24 cursor-pointer my-auto "
      >
        <Image
          alt="logo"
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={placeholder || "Start your search"}
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
      {/* right */}

      {/* Calender */}
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-4">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl pl-2 flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5 " />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              className="w-12 pl-2 text-lg outline-none  text-red-400"
              type="number"
              min={1}
            />
          </div>
          <div className="flex">
            <button
              onClick={() => setSearchInput("")}
              className="flex-grow text-gray-500 cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={search}
              className="flex-grow text-red-500 cursor-pointer"
            >
              Search
            </button>
          </div>
        </div>
      )}
      {/* Calender */}

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
