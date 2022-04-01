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
  order: () => {
     const data = axios.get("/api/kichener/orders/get",confOption);

      return data
  },
  orderDone: () => {
    
    const data = axios.get("/api/kichener/orders/done",confOption);
     return data
 },
 postDone: (orderID) => {
  const data = axios.post(`/api/kichener/orders/${orderID}/done`, {},confOption);

   return data
  },
  
};
