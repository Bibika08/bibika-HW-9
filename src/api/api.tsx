import axios, { AxiosInstance } from "axios";

export interface User {
  id: number;
  name: string;
  email: string;
  company: { name: string };
}

export interface Post {
  id: number;
  title: string;
  userId: number;
}

const api: AxiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const fetchUsers = async (): Promise<User[]> => {
  const response = await api.get<User[]>("/users");
  return response.data;
};

export const fetchUserPosts = async (userId: number): Promise<Post[]> => {
  const response = await api.get<Post[]>("/posts", {
    params: { userId },
  });
  return response.data;
};

export default api;