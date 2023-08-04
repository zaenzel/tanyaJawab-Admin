import React from "react";

const DefaultEmpty = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-72 md:w-96">
        <img src="./images/emptydata.jpg" alt="" className="object-contain" />
      </div>
      <h1 className="text-xl text-gray-700 font-semibold text-center">
        Maaf, belum ada pertanyaan di kategori ini
      </h1>
    </div>
  );
};

export default DefaultEmpty;
