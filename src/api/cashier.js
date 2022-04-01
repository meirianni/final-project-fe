import axios from "../services/axios";

let storage = localStorage.getItem("mini-pos:token");
let confOption

if(storage===""){ 
  
  confOption = {
    validateStatus: function (status) {
      return status < 500; // Resolve only if the status code is less than 500
    },
  };
}else{
  storage = JSON.parse(localStorage.getItem("mini-pos:token"));
  confOption = {
    headers: { Authorization: `Bearer ${storage.token}` },
    validateStatus: function (status) {
      return status < 500; // Resolve only if the status code is less than 500
    },
  };
}

export default {
  getProduct: () => {
    const data = axios.get("/api/cashier/products/get", confOption);

    return data;
  },
  postOrder: (qty, id) => {
    // alert(id);
    const data = axios.post(
      "/api/cashier/orders/cart",
      {
        table: "Meja 1",
        qtyOrder: qty,
        productID: id,
      },
      confOption
    );

    return data;
  },
  postCustomer: (req) => {
    const data = axios.post("/api/cashier/orders/customer", req, confOption);

    return data;
  },
  postPayment: (req) => {
    console.log(req);
    const data = axios.post("/api/cashier/orders/payment", req, confOption);

    return data;
  },

  getOrders: () => {
    const data = axios.get("/api/cashier/orders/cart", confOption);

    return data;
  },

  getCategory: () => {
    const data = axios.get("/api/cashier/categories/get", confOption);

    return data;
  },
};
