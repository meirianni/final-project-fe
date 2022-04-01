import React, { useState } from "react";
import Swal from "../services/swal";
import cashier from "../api/cashier";
const AddCustomerorder = ({amount, tax, id}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  
  const postCustomer = async () => {
    //Swal.notification("Apakah Trnsaksi akan dilanjutkan?", "information")
    function sleep(milliseconds) {
      const date = Date.now();
      let currentDate = null;
      do {
        currentDate = Date.now();
      } while (currentDate - date < milliseconds);
    }
    
     cashier
      .postCustomer({
        name: name,
        email: email,
        phone: phone,
        address: address,
        city: city,
      })
      .then((response) => {        
        if (response.data.status === "success") {
          const data = payment(response.data.data.id);
          console.log(data)
          //alert("test")
          Swal.notification("Transaksi Tersimpan", "success")
        }
      })
      .catch((err) => alert(err));

      sleep(2000)
  };

  const payment = async (customerID) => {
    await cashier
      .postPayment({
        amount: amount+tax,
        tax: tax,
        paymentType: "Cash",
        orderID: id,
        customerID: customerID,
      })
      .then((res) => {
        console.log(res)
        return res;
      })
      .catch((err) => alert(err));
  };
  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Nama</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Phone</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Address</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">City</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary" onClick={postCustomer}>
        Submit
      </button>
    </form>
  );
};

export default AddCustomerorder;
