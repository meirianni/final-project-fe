import axios from "axios";

export default {
  login: (username, password) => {
     const data = axios.post("http://localhost:3001/api/auth/login", {},{auth: {
        username: username,
        password: password
      }});

      return data
  },
  register: (payload) => axios.post("/users/register", payload),
  refresh: (credentials) =>
    axios.post("/refresh-tokens", {
      refresh_token: credentials.refresh_token,
      email: credentials.email,
    }),

  details: () => axios.get("/users"),
  update: (data) => axios.put("/users", data),
  logout: () => axios.post("/users/logout"),
};
