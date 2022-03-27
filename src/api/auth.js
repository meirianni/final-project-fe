import axios from "../services/axios";

export default {
  login: (username, password) => {
     const data = axios.post("/api/auth/login", {},{auth: {
        username: username,
        password: password
        },validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        }
      },
      );

      return data
  },
};
