import React from "react";

const Modal = () => {
  return (
    <aside className="flex flex-col justify-around h-40 absolute top-32 rounded bg-gray-200 border-2 border-red-600">
      <div>
        <p>Remove all items from your carts</p>
        <div className="flex justify-around">
          <button className="bg-gray-100 border border-red-400 text-red-400">
            Confirm
          </button>
          <button className="bg-gray-100 border border-blue-400 text-blue-400">
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
