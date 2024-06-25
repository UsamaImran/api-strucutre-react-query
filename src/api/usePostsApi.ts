import { useMutation, useQuery } from "react-query";
import { Api } from "./Api";

const POSTS_BASE_API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";
const myApi = new Api({ baseURL: POSTS_BASE_API_ENDPOINT });

export const usePosts = () => {
  return useQuery({
    queryKey: "posts",
    queryFn: () => myApi.get<unknown[]>(POSTS_BASE_API_ENDPOINT),
    enabled: true,
  });
};

export const useGetSinglePost = (id: string) => {
  return useQuery({
    queryKey: ["posts", "singlePost", id],
    queryFn: () => myApi.get(`${POSTS_BASE_API_ENDPOINT}/${id}`),
    enabled: !!id,
  });
};

export const useCreatePost = () => {
  return useMutation({
    mutationKey: "create Post",
    mutationFn: (body: Record<string, unknown>) =>
      myApi.post(POSTS_BASE_API_ENDPOINT, body),
  });
};
