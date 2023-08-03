import React, { useEffect } from "react";
import Layout from "../../global/Layout/Layout";
import CardPost from "./CardPost/CardPost";
import { getPosts } from "../../../utils/api/api";
import { Spinner } from "flowbite-react";
import CardLoading from "../../global/Loading/CardLoading";
import DefaultError from "../../global/Error/DefaultError";

const Home = () => {
  const { posts, isError, isLoading } = getPosts();

  let loading = [...Array(10)].map((e, i) => {
    return <CardLoading key={i} />;
  });

  let success = posts?.data.data.map((e, i) => {
    return <CardPost posts={e} key={i} />;
  });

  let error = <DefaultError message={isError?.message} />;

  return (
    <Layout>
      <div className="flex flex-col gap-5">
        {isError ? error : isLoading ? loading : success}
      </div>
    </Layout>
  );
};

export default Home;
