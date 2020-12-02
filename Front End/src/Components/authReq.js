import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:2513",
});

instance.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  req.headers.authorization = `Bearer ${token}`;
  return req;
});

export default instance;
