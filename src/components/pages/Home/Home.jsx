import React, { useEffect, useState } from "react";
import Layout from "../../global/Layout/Layout";
import CardPost from "./CardPost/CardPost";
import { getCategory, getPosts } from "../../../utils/api/api";
import CardLoading from "../../global/Loading/CardLoading";
import DefaultError from "../../global/Error/DefaultError";
import ListCategory from "./ListCategory/ListCategory";
import queryString from "query-string";
import axios from "axios";
import { useLocation, useSearchParams } from "react-router-dom";
import DefaultEmpty from "../../global/Empty/DefaultEmpty";

const Home = () => {
  const [queryParams, setQueryParams] = useState({});
  const location = useLocation();
  const parsed = queryString.parse(location.search);

  const { posts, isError, isLoading } = getPosts(parsed.category_id);
  const { category, isErrorCat, isLoadingCat } = getCategory();

  let loadingCard = [...Array(10)].map((e, i) => {
    return <CardLoading key={i} />;
  });

  let successCard =
    posts?.data.data.length !== 0 ? (
      posts?.data.data.map((e, i) => {
        return <CardPost posts={e} key={i} />;
      })
    ) : (
      <DefaultEmpty />
    );

  let errorCard = <DefaultError message={isError?.message} />;

  let loadingCat = [...Array(10)].map((e, i) => {
    return <CardLoading key={i} />;
  });

  let successCat = <ListCategory category={category?.data} />;

  let errorCat = <DefaultError message={isErrorCat?.message} />;

  return (
    <Layout>
      <div className="flex flex-col gap-10 sm:flex-row">
        <div className="basis-1/3">
          {isErrorCat ? errorCat : isLoadingCat ? loadingCat : successCat}
        </div>
        <div className="flex flex-col gap-10 basis-2/3">
          {isError ? errorCard : isLoading ? loadingCard : successCard}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
