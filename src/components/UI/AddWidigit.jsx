import React, { useState } from "react";
import { WidgitForm } from "./WidgitForm";

export function AddWidigit() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex justify-center items-center bg-white min-w-[450px] overflow-hidden h-60 p-2 m-3 rounded-lg">
      <button
        className="p-2 rounded-lg bg-white border"
        onClick={() => setIsOpen(true)}
      >
        Add Widget +
      </button>

      {isOpen && <WidgitForm />}
    </div>
  );
}
