import React, { useState, useRef, useEffect } from "react";
import Logo from "./Images/logo.png";
import Wallet from "./wallet";
import {
  Search,
  Globe,
  Sun,
  Grid,
  Bell,
  X,
  Menu,
  Moon,
  Monitor,
} from "lucide-react"; // Import Menu icon
import useClickOutside from "./useClickOutside"; // Import the custom hook

const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");

  const searchRef = useRef(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const applyTheme = (selectedTheme) => {
    setTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);

    if (selectedTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else if (selectedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDarkScheme) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const renderThemeIcon = () => {
    if (theme === "light") {
      return <Sun className="h-5 w-5 text-gray-500 cursor-pointer" />;
    } else if (theme === "dark") {
      return <Moon className="h-5 w-5 text-gray-500 cursor-pointer" />;
    } else {
      return <Monitor className="h-5 w-5 text-gray-500 cursor-pointer" />;
    }
  };

  useClickOutside(searchRef, () => setIsSearchActive(false));
  useClickOutside(dropdownRef, () => setIsDropdownOpen(false));

  return (
    <header className="flex justify-between p-2 mt-2 ml-6 mr-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 shadow-md rounded-lg">
      {/* Hamburger Menu (visible on small screens) */}
      <div className="flex items-center md:hidden">
        <Menu
          className="h-6 w-6 text-gray-500 cursor-pointer"
          onClick={() => setIsSidebarOpen(true)}
        />
      </div>

      {/* Search bar and right-side icons */}
      <div className="flex items-center flex-1">
        {isSearchActive ? (
          <div
            ref={searchRef}
            className="flex items-center rounded-lg px-4 py-2 w-full md:w-3/4 lg:w-full"
          >
            <Search className="h-5 w-5 text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none w-full text-gray-600"
            />
            <X
              className="h-5 w-5 text-gray-500 cursor-pointer"
              onClick={() => setIsSearchActive(false)}
            />
          </div>
        ) : (
          <div className="flex items-center flex-1">
            <div
              ref={searchRef}
              className="flex rounded-lg px-4 py-2 md:w-3/4 lg:w-1/2"
            >
              <Search
                className="h-5 w-5 mr-3 cursor-pointer"
                onClick={() => setIsSearchActive(true)}
              />
              <input
                type="text"
                placeholder="Search (Ctrl+/)"
                className="bg-transparent focus:outline-none w-full"
                onFocus={() => setIsSearchActive(true)}
              />
            </div>

            <div className="flex items-center md:ml-7 md:space-x-8">
              
              <Globe className="h-5 w-5 text-gray-500 cursor-pointer" />
              <div ref={dropdownRef} className="relative">
                <div onClick={toggleDropdown}>{renderThemeIcon()}</div>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-10">
                    <ul className="p-2 space-y-1">
                      <li
                        className={`flex items-center p-2 rounded-lg cursor-pointer ${
                          theme === "light" ? "bg-indigo-100" : ""
                        }`}
                        onClick={() => applyTheme("light")}
                      >
                        <Sun className="h-5 w-5 text-gray-500 mr-2" />
                        <span className="text-gray-700">Light</span>
                      </li>
                      <li
                        className={`flex items-center p-2 rounded-lg cursor-pointer ${
                          theme === "dark" ? "bg-indigo-100" : ""
                        }`}
                        onClick={() => applyTheme("dark")}
                      >
                        <Moon className="h-5 w-5 text-gray-500 mr-2" />
                        <span className="text-gray-700">Dark</span>
                      </li>
                      <li
                        className={`flex items-center p-2 rounded-lg cursor-pointer ${
                          theme === "system" ? "bg-indigo-100" : ""
                        }`}
                        onClick={() => applyTheme("system")}
                      >
                        <Monitor className="h-5 w-5 text-gray-500 mr-2" />
                        <span className="text-gray-700">System</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <Grid className="h-5 w-5 text-gray-500 cursor-pointer" />
              <div className="relative">
                <Bell className="h-5 w-5 text-gray-500 cursor-pointer" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </div>
              <div className="relative w-9 h-9">
              <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full border-2 border-gray-200"
          />
                <span className="absolute -bottom-1 -right-1 bg-green-500 border-2 border-white rounded-full w-4 h-4"></span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
