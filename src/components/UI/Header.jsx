import React, { useEffect, useRef, useState } from "react";
import { refresh, more, watch, down } from "../../assets";
import { useNavigate } from "react-router-dom";
import { Drawer } from "../UI";

export function Header() {
  const navigate = useNavigate();

  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // New state for the drawer

  const historyDropdownRef = useRef(null);
  const toggleHistoryDropdown = () => setIsHistoryOpen(!isHistoryOpen);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen); // Toggle drawer state

  const handleClickOutside = (event) => {
    if (
      historyDropdownRef.current &&
      !historyDropdownRef.current.contains(event.target)
    ) {
      setIsHistoryOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="mx-auto flex justify-between items-center relative z-[90]">
      <h1 className="sm:text-sm md:text-base lg:text-2xl font-bold text-center">
        CNAPP Dashboard
      </h1>
      <div className="flex space-x-5 items-center">
        <button
          className="p-2 rounded-md bg-white shadow-md"
          onClick={toggleDrawer} // Open drawer on click
        >
          Add Widget +
        </button>

        <button
          className="p-2 bg-white rounded-md shadow-md"
          onClick={() => navigate(0)}
        >
          <img src={refresh} alt="" className="w-5" />
        </button>

        <div className="relative">
          <button
            className="p-2 rounded-md bg-white shadow-md"
            onClick={toggleDrawer}
          >
            <img src={more} alt="More Options" className="w-5" />
          </button>
        </div>
        <div className="relative" ref={historyDropdownRef}>
          <button
            className="flex px-2 shadow-md h-10 items-center space-x-1 border-2 border-[#1C274C] rounded-md"
            onClick={toggleHistoryDropdown}
          >
            <img src={watch} alt="Watch Icon" className="w-7" />
            <p className="border-l-2 border-[#1C274C] pl-2 items-center flex h-full font-bold text-[#1C274C]">
              Last 2 days
            </p>
            <img src={down} alt="Down Arrow" className="w-5" />
          </button>
          {isHistoryOpen && (
            <div className="absolute z-50 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
              <ul className="py-1">
                <li onClick={toggleHistoryDropdown}>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                   12hr ago
                  </a>
                </li>
                <li onClick={toggleHistoryDropdown}>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    24hr ago
                  </a>
                </li>
                <li onClick={toggleHistoryDropdown}>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    1 Week ago
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Drawer component */}
      {isDrawerOpen && <Drawer onClose={toggleDrawer} />}
    </div>
  );
}
