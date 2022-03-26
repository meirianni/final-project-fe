import axios from "axios";

export default {
  login: (username, password) => {
     const data = axios.post("http://localhost:3001/api/auth/login", {},{auth: {
        username: username,
        password: password
      }});

      return data
  },
};
