import React from "react";

const DefaultError = ({ message }) => {
  return (
    <div className="flex items-center h-full">
      <h1 className="text-2xl text-gray-500 font-semibold">{message}</h1>
    </div>
  );
};

export default DefaultError;
