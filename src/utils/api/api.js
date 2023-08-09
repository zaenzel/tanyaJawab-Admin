import axios from "axios";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then((res) => res);
const api_base_url = import.meta.env.VITE_BASE_URL_API;

// posts
export function getPosts(category) {
  const { data, error, isLoading } = category
    ? useSWR(`${api_base_url}/posts?category=${category}`, fetcher)
    : useSWR(`${api_base_url}/posts`, fetcher);

  return {
    posts: data,
    isLoading,
    isError: error,
  };
}

export function getDetailPost(id) {
  const { data, error, isLoading } = useSWR(
    `${api_base_url}/posts/${id}`,
    fetcher
  );

  return {
    posts: data,
    isLoading,
    isError: error,
  };
}

export function addAnswer(answered, answer, id_posts) {
  const res = axios.put(`${api_base_url}/posts/${id_posts}`, {
    answered,
    answer,
  });
  return res;
}

export function deletePost(id) {
  const res = axios.delete(`${api_base_url}/posts/${id}`);
  return res;
}

export function getCategory() {
  const { data, error, isLoading } = useSWR(
    `${api_base_url}/category`,
    fetcher
  );

  return {
    category: data,
    isLoadingCat: isLoading,
    isErrorCat: error,
  };
}

// user
export function userLogin(user) {
  const res = axios.post(`${api_base_url}/users/login`, {
    email: user.email,
    password: user.password,
  });
  return res;
}
