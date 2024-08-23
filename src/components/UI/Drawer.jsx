import React, { useState } from "react";
import { cross } from "../../assets";
import { useSelector } from "react-redux";

export function Drawer({ onClose }) {
  const categories = useSelector((state) => state.widgets.categories);
  const [activeTab, setActiveTab] = useState(categories[0]?.shortname || "");

  console.log(categories);

  return (
    <>
      <div className="fixed top-0 w-full max-w-md right-0 h-full bg-white shadow-lg transition-transform duration-300 transform translate-x-0 z-[100]">
        <div className="p-4 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-900"
          >
            <img src={cross} alt="Close" className="w-6 h-6" />
          </button>
          <h2 className="text-lg font-bold mb-4 bg-blue-900 text-white p-2">
            Add Widget
          </h2>
          <div className="w-full flex flex-col">
            <h2 className="text-lg font-bold mb-4 text-black p-2">
              Personalise your dashboard by adding the following widget
            </h2>
            <div className="w-full">
              {/* Category Tabs */}
              <div className="flex space-x-4 border-b mb-4">
                {categories.map((cato, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(cato.shortname)}
                    className={`py-2 px-4 focus:outline-none ${
                      activeTab === cato.shortname
                        ? "border-b-2 border-b-blue-900"
                        : "text-black"
                    }`}
                  >
                    {cato.shortname}
                  </button>
                ))}
              </div>

              {/* Render widgets for the active category only */}
              {categories
                .filter((cato) => cato.shortname === activeTab)
                .map((cato) => (
                  <div key={cato.shortname}>
                    {cato.widgets.map((widget, i) => (
                      <div
                        key={widget.id}
                        className="flex items-center border p-2 space-x-2 mb-2"
                      >
                        <input
                          type="checkbox"
                          id={`widget-${widget.id}`}
                          name={`widget-${widget.id}`}
                          value={widget.title}
                          className="h-5 w-5 text-blue-600"
                        />
                        <label
                          htmlFor={`widget-${widget.id}`}
                          className="text-black"
                        >
                          {widget.title}
                        </label>
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
    </>
  );
}
