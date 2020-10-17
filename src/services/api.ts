import axios from "axios";

const api = axios.create({
   baseURL: "http://192.168.43.93:3333" // IP address where your API ins running
                                        // API's repository: https://github.com/igorlrnc/happy-api
});

export default api;