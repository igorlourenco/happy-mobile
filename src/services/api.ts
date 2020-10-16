import axios from "axios";

const api = axios.create({
   baseURL: "http://20.14.2.20:3333"
});

export default api;