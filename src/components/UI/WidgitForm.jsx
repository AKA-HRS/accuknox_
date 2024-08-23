import React, { useState } from "react";

export function WidgitForm() {
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    values: [],
    color: [],
    labels: [],
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleArrayChange = (e, field) => {
    const valuesArray = e.target.value.split(",");
    setFormData((prevData) => ({
      ...prevData,
      [field]: valuesArray,
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
    // handle widget addition logic here
    setIsOpen(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };
  return (
    <div
      className="fixed inset-0 flex items-center z-[100] justify-center bg-black bg-opacity-50"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white w-96 p-6 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">Add New Widget</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Category</label>
          <input
            type="text"
            name="categor"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            Values (comma separated)
          </label>
          <input
            type="text"
            value={formData.values.join(",")}
            onChange={(e) => handleArrayChange(e, "values")}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            Colors (comma separated)
          </label>
          <input
            type="text"
            value={formData.color.join(",")}
            onChange={(e) => handleArrayChange(e, "color")}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            Labels (comma separated)
          </label>
          <input
            type="text"
            value={formData.labels.join(",")}
            onChange={(e) => handleArrayChange(e, "labels")}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            className="bg-gray-300 px-4 py-2 rounded"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Add Widget
          </button>
        </div>
      </div>
    </div>
  );
}
