import React, { useState, useEffect } from "react";
// import Modal from "../../component/modal.jsx";

// import { getProducts } from "../service/product";
import axios from "axios";
import logo from "../assets/logo.png";
import alldish from "../assets/spoon-and-fork.png";
import burgers from "../assets/burger.png";
import burgercolor from "../assets/burgercolor.png";
import spagheti from "../assets/noodles.png";
import friedChicken from "../assets/fried-chicken.png";
import drinks from "../assets/soft-drink.png";
import dinner from "../assets/dinner.png";
import plus from "../assets/plus.png";
import minus from "../assets/minus.png";
import close from "../assets/close.png";
import tick from "../assets/tick.png";
//bikin function

const Kasir = () => {
  const productApiURL = "http://localhost:3001/api/cashier/products/get";

  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBsb3llZUlkIjoxLCJlbXBsb3llZU5hbWUiOiJZdWtpIEYiLCJpYXQiOjE2NDc4NzI2NzUsImV4cCI6MTY0ODQ3NzQ3NX0.WrvoSbPv7Bj7RvzghYlvzemCKKZJn4cYTNSuZ3aEZj4";
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const [data, setData] = useState([]);

  const getData = async () => {
    await axios
      .get(`${productApiURL}`, config)
      .then((getProduct) => {
        // console.log(getProduct);
        setData(getProduct.data.data);
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    getData();
    // console.log(data);
    // ... another func
  }, []);

  return (
    <div className="row section-cashier">
      <section id="sidebar" className="col-1">
        <div className="brand">
          <img src={logo} alt="" />
          <h1>
            DineIn<span>POS</span>
          </h1>
        </div>
        <div className="choice">
          <div className="choices">
            <img src={alldish} alt="" />
            <h2>All Dishes</h2>{" "}
          </div>
          <div className="choices">
            <img src={burgers} alt="" />
            <h2>Burger</h2>{" "}
          </div>
          <div className="choices">
            <img src={spagheti} alt="" />
            <h2>Spagheti</h2>{" "}
          </div>
          <div className="choices">
            <img src={friedChicken} alt="" />
            <h2>FriedChicken</h2>{" "}
          </div>
          <div className="choices">
            <img src={drinks} alt="" />
            <h2>Drinks</h2>{" "}
          </div>
        </div>

        <div className="profil">
          <img
            src="https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZlbWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h3>Mei Rianni</h3>
          <h4>Kasir</h4>
        </div>
      </section>
      <section id="center" className="col-lg-8 col-md-6">
        <div className="name">
          <h1>Burgers</h1>
          <img src={burgercolor} alt="" />
        </div>
        <div className="menu row">
          {data.map((product, idx) => (
            <div key={idx} className="menu1 col-lg-3 col-md-3">
              <img className="img-fluid" src={product.image} alt="" />
              <h2>{product.name}</h2>
              <h3>{product.size}</h3>
              <h1>{product.price}</h1>
            </div>
          ))}
        </div>
      </section>
      <section id="kanan" className="col-lg-3 col-md-4">
        <div className="table-order">
          <img src={dinner} alt="" />
        </div>
        <div className="order">
          <button className="new-order">New Order</button>
          <button className="history-order">History Order</button>
        </div>
        <div className="order-section">
          <div className="order1">
            <img
              src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt=""
            />{" "}
            <div className="info">
              <h2>Cheese Burger</h2>
              <h3>45.000</h3>
              <h4>size : 300g</h4>
              <div className="button-order">
                <div className="button-minus">
                  <img src={minus} alt="" />
                </div>
                <h4>02</h4>
                <div className="button-plus">
                  <img src={plus} alt="er" />
                </div>
              </div>
            </div>
            <div className="total">
              <img src={close} alt="" />
              <h1>90.000</h1>
            </div>
          </div>
          <div className="order1">
            <img
              src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt=""
            />{" "}
            <div className="info">
              <h2>Cheese Burger</h2>
              <h3>45.000</h3>
              <h4>size : 300g</h4>
              <div className="button-order">
                <div className="button-minus">
                  <img src={minus} alt="" />
                </div>
                <h4>160</h4>
                <div className="button-plus">
                  <img src={plus} alt="er" />
                </div>
              </div>
            </div>
            <div className="total">
              <img src={close} alt="" />
              <h1>90.000</h1>
            </div>
          </div>
          <div className="order1">
            <img
              src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt=""
            />{" "}
            <div className="info">
              <h2>Cheese Burger</h2>
              <h3>45.000</h3>
              <h4>size : 300g</h4>
              <div className="button-order">
                <div className="button-minus">
                  <img src={minus} alt="" />
                </div>
                <h4>160</h4>
                <div className="button-plus">
                  <img src={plus} alt="er" />
                </div>
              </div>
            </div>
            <div className="total">
              <img src={close} alt="" />
              <h1>90.000</h1>
            </div>
          </div>
          <div className="order1">
            <img
              src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt=""
            />{" "}
            <div className="info">
              <h2>Cheese Burger</h2>
              <h3>45.000</h3>
              <h4>size : 300g</h4>
              <div className="button-order">
                <div className="button-minus">
                  <img src={minus} alt="" />
                </div>
                <h4>160</h4>
                <div className="button-plus">
                  <img src={plus} alt="er" />
                </div>
              </div>
            </div>
            <div className="total">
              <img src={close} alt="" />
              <h1>90.000</h1>
            </div>
          </div>
        </div>

        <div className="total-all">
          <div className="subtotal">
            <h4>subtotal</h4>
            <h4>tax(10%)</h4>
            <h4>
              <span>Total</span>
            </h4>
          </div>
          <div className="price">
            <h4>360.000</h4>
            <h4>36.000</h4>
            <h4>
              <span>396.000</span>
            </h4>
          </div>
        </div>

        <div className="submit-order">
          <img src={tick} alt="" />
          <h3>Submit Order</h3>
        </div>
      </section>
    </div>
  );
};

export default Kasir;
