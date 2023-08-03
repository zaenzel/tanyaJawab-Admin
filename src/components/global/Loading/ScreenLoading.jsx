import { Spinner } from "flowbite-react";
import React from "react";

const ScreenLoading = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 h-full w-screen">
      <Spinner aria-label="Extra small spinner example" size="xl" />
      <h1 className="text-4xl font-semibold text-primary">Loading</h1>
    </div>
  );
};

export default ScreenLoading;
