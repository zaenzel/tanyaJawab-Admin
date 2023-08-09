import { Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import date from "../../../../utils/date";
import category from "../../../../utils/category"

const CardPost = ({ posts }) => {
  const { id, title, question, created_at, id_category, answer } = posts;

  return (
    <Link to={`/post/${id}`} className="w-full flex justify-center">
      <Card className="w-72 sm:w-full max-w-xl lg:max-w-4xl hover:bg-slate-50">
        <div className="flex justify-between gap-5">
          <div className="flex flex-col gap-1">
            <h5 className="text-2xl tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <p className="font-light text-sm text-gray-400 dark:text-gray-400">
              {category[id_category - 1]}, {date(created_at)}
            </p>
          </div>

          {answer && (
            <p className="text-xs sm:text-sm font-light text-green-500">
              terjawab
            </p>
          )}

        </div>

        <p className="font-normal text-gray-700 dark:text-gray-400 truncate">
          {question}
        </p>
      </Card>
    </Link>
  );
};

export default CardPost;
