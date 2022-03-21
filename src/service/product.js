import axios from "axios";
export const getProducts = async () => {
  try {
    const { data } = await axios.get(`localhost:3001/api/cashier/products/get`);
    return {
      code: 200,
      status: "success",
      products: data,
      msg: "get data sukses",
    };
  } catch (e) {
    return {
      code: 400,
      status: "error",
      productsdata: null,
      msg: "Service Error",
    };
  }
};
