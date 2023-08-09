import React from "react";
import Layout from "../../global/Layout/Layout";
import CardPost from "./CardPost/CardPost";
import { getCategory, getPosts } from "../../../utils/api/api";
import CardLoading from "../../global/Loading/CardLoading";
import DefaultError from "../../global/Error/DefaultError";
import ListCategory from "./ListCategory/ListCategory";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import DefaultEmpty from "../../global/Empty/DefaultEmpty";
import category from "../../../utils/category";

const Home = () => {
  const location = useLocation();
  const parsed = queryString.parse(location.search);

  const { posts, isError, isLoading } = getPosts(parsed.category)
  
  let loadingCard = [...Array(10)].map((e, i) => {
    return <CardLoading key={i} />;
  });

  let successCard =
    posts?.data.length !== 0 ? (
      posts?.data.map((e, i) => {
        return <CardPost posts={e} key={i} />;
      })
    ) : (
      <DefaultEmpty />
    );

  let errorCard = <DefaultError message={isError?.message} />;

  let successCat = <ListCategory category={category} />;

  return (
    <Layout>
      <div className="flex flex-col gap-10 sm:flex-row">
        <div className="basis-1/3">
          {successCat}
        </div>
        <div className="flex flex-col gap-10 basis-2/3">
          {isError ? errorCard : isLoading ? loadingCard : successCard}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
