import React from 'react';

export default function Button({ name, ...props }) {
  return (
    <>
      <button {...props} className="w-full px-6 py-2 font-semibold text-white bg-blue-900 rounded-md shadow-md">
        {name}
      </button>
    </>
  );
}
