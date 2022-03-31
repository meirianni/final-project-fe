import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_HOST || "http://159.65.138.79:3001"}`,
});

export { default as setAuthorizationHeader } from "./setAuthorizationHeader";

export default instance;


