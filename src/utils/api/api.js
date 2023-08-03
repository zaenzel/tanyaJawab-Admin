import axios from "axios";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then((res) => res);
const api_base_url = import.meta.env.VITE_BASE_URL_API;

export function getPosts() {
  const { data, error, isLoading } = useSWR(`${api_base_url}/posts`, fetcher);

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

export function addAnswer(id_answer, answer, id_posts) {
  const res = axios.put(`${api_base_url}/posts/${id_posts}`, {
    id_answer,
    answer,
  });
  return res;
}

export function deletePost(id) {
  const res = axios.delete(`${api_base_url}/posts/${id}`)
  return res
}