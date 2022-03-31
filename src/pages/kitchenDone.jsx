import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import bell from "../assets/desk-bell.png";
import checklist from "../assets/checklist.png";

import kichen from "../api/kichener"

const  KitchenDone = () => {
  const [orderDone, setOrderDone] = useState([]);

  const current = new Date();
  const date = `${current.getDate()} / ${current.getMonth()+1} / ${current.getFullYear()}`;

  const getOrderDone = async () => {
    
    await kichen.orderDone()
      .then((response) => {
        setOrderDone(response.data.data);
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    getOrderDone();

  }, []);
  return (
    <div className="dashboard-kitchen">
      <section id="dashboard">
        <div className="brand">
          <img src={logo} alt="" />
          <h1>
            DineIn<span>POS</span>
          </h1>
        </div>
        <div className="choice">
            <Link to="/kichen" className="choices">
              <img src={bell} alt="" />
              <h2>New Order</h2>{" "}
            </Link>
            <Link to="/kichen/done" className="choices active">
              <img src={checklist} alt="" />
              <h2>Order Done</h2>{" "}
            </Link>            
            <Link to="/admin" className="choices text-center">
              <img src={logo} alt="" />
              <h2>Home</h2>{" "}
            </Link>
        </div>

        <div className="profil">
          <img
            src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNoZWZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h3>Yuki ....</h3>
          <h4>Chef</h4>
        </div>
      </section>
      <section id="tengah">
        <div className="name">
          <h1>New Order</h1>
          <h2> { date } </h2>
        </div>
        <div className="menu">
            {orderDone.map((order, idx) => (
              <div className="menu1 text-center" key={idx}>
                <h1>#{ order.id }</h1>
                <h2>{ (order.customer !== null)?order.customer.name:""}</h2>
                <div className="list-menu1">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Size</th>
                        <th scope="col">Qty</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.orderproducts.map((product, idx)=> (
                        <tr>
                        <th scope="row">{idx+1}</th>
                        <td>{product.product.name}</td>
                        <td>{product.product.size}</td>
                        <td>{product.qtyOrder}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <button className="btn btn-success">Done Send</button>
                </div>
              </div>
            ))}
          
          
        </div>
      </section>
    </div>
  );
}

export default KitchenDone;
