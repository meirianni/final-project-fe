import React, { useState } from "react";
import Swal from "../services/swal";
import cashier from "../api/cashier";
const AddCustomerorder = (amount, tax, id) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const postCustomer = async () => {
    await cashier
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
          alert(data.message);
        }
      })
      .catch((err) => alert(err));
  };

  const payment = async (customerID) => {
    await cashier
      .postPayment({
        amount: amount,
        tax: tax,
        paymentType: "Cash",
        orderID: id,
        customerID: customerID,
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => alert(err));
  };
  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Nama {id}</label>
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
