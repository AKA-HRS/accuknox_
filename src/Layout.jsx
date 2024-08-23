import React from "react";
import { Header } from "./components/UI";
import { Categories } from "./components/Dashboard";
import { useSelector } from "react-redux";

export default function Layout() {
  const categories = useSelector((state) => state.widgets.categories);

  return (
    <div className="bg-[#f0f5fa] min-h-screen">
      <div className="h-10 flex items-center border-black bg-white px-2 md:px-4 lg:px-6 xl:px-8">
        <button className="text-base px-2 hover:underline">Home</button>
        <p> {">"}</p>
        <button className="text-base p-2 text-center hover:underline hover:text-blue-600">
          Dashboard V2
        </button>
        <div className="flex space-x-2 justify-center bg-[#f0f5fa] px-1 items-center w-full md:w-auto md:max-w-md lg:max-w-lg xl:w-96 py-1 mx-auto rounded-md">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            className="bg-transparent flex-1 outline-none"
            placeholder="Search anything..."
          />
        </div>
      </div>

      {/* main */}
      <div className="w-full px-2 md:px-4 lg:px-6 xl:px-8 mt-2 md:mt-5 lg:mt-8 mx-auto overflow-hidden">
        <Header />
        {categories.map((d, index) => (
          <Categories heading={d.name} key={index} data={d.widgets} />
        ))}
      </div>
    </div>
  );
}
