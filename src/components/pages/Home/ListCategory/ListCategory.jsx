import React from "react";
import { Link } from "react-router-dom";

const ListCategory = ({ category = [] }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-2xl">Kategori</h4>
      <div className="flex flex-wrap gap-4 sm:gap-5">
        {category?.data.length !== 0 &&
          category?.data.map((e, i) => {
            return (
              <Link  key={i} to={`?category_id=${e.id}`} className="flex gap-4 sm:gap-5 text-gray-500">
                <p className="hover:text-black hover:scale-105">{e.name}</p>
                {i !== category?.data?.length - 1 && <p className="opacity-20">|</p>}
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default ListCategory;
