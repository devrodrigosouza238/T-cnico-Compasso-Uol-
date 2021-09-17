import axios from "axios";

const api = axios.create({
  baseURL: "https://api.nytimes.com/svc/",
});

export default api;
