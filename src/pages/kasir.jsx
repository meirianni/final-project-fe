import React, { useState, useEffect } from "react";
import Modal from "../component/modal.jsx";
import ReactPaginate from "react-paginate";
import AddCustomer from "pages/addCustomerorder";
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
import { Link } from "react-router-dom";

//bikin function

import kichen from "../api/cashier";
import cashier from "../api/cashier";

const Kasir = () => {
  const [product, setProduct] = useState([]);
  const [order, setOrder] = useState([]);
  const [category, setCategory] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => {
    setCounter(counter + 1);
  }; // di tambah metode post axios untuk menambah qty sesuai order product id
  const decrementCounter = () => {
    setCounter(counter - 1);
  }; // di tambah metode post axio untuk mengurangi qty sesuai order product id
  const [postsPerPage] = useState(5);
  const [offset, setOffset] = useState(1);
  const [posts, setAllPosts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [orderID, setOrderID] = useState(0);
  const [amount, setAmount] = useState(0);
  const [tax, setTax] = useState(0);

  if (counter <= 0) {
    decrementCounter = () => setCounter(1);
  }
  //tambahin semua disini

  const getProduct = async () => {
    await cashier
      .getProduct()
      .then((response) => {
        setProduct(response.data.data);
      })
      .catch((err) => alert(err));
  };
  const getCategory = async () => {
    await cashier
      .getCategory()
      .then((response) => {
        setCategory(response.data.data);
      })
      .catch((err) => alert(err));
  };
  const postOrder = async (qty, id) => {
    await cashier
      .postOrder(qty, id)
      .then(() => {
        getOrder();
      })
      .catch((err) => alert(err));
  };

  const getOrder = async () => {
    await cashier
      .getOrders()
      .then((response) => {
        setOrder(response.data.data);
        let price = 0;
        response.data.data.map((order, idx) => {
          // disini harus implementasikan order ID set amount = price * qtyOrder + semua row     tax =  10% dari amount
          price += order.product.price * order.qtyOrder;
          setOrderID(order.order.id);
        });
        setAmount(price);
        setTax(0.1 * price);
      })
      .catch((err) => alert(err));
  };

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setSearchInput(e.target.value);
  // };

  // const handlePageClick = (e) => {
  //   const selectedPage = e.selected;
  //   setOffset(selectedPage + 1);
  // };

  // if (searchInput.length > 0) {
  //   data.filter((product) => {
  //     return product.name.match(searchInput);
  //   });
  // }

  useEffect(() => {
    getProduct();
    getOrder();

    // console.log(data);
    // ... another func
  }, []);

  return (
    <div className="row section-cashier">
      <section id="sidebar" className="col-lg-1">
        <div className="brand">
          <img src={logo} alt="" />
          <h1>
            DineIn<span>POS</span>
          </h1>
        </div>
        <div className="choice">
          {category.map((categories, idx) => (
            <div className="choices" key={idx}>
              <img src={alldish} alt="" />
              <h2>All Dishes</h2>{" "}
            </div>
          ))}
          {/* <div className="choices">
            <img src={alldish} alt="" />
            <h2>All Dishes</h2>{" "}
          </div> */}
          <div className="choices">
            <img src={burgers} alt="" />
            <h2>Burger</h2>{" "}
          </div>
          {/* <div className="choices">
            <img src={spagheti} alt="" />
            <h2>Spagheti</h2>{" "}
          </div>
          <div className="choices">
            <img src={friedChicken} alt="" />
            <h2>FriedChicken</h2>{" "}
          </div> */}
          <Link to="/admin" className="choices text-center">
            <img src={logo} alt="" />
            <h2>Home</h2>{" "}
          </Link>
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
      <div id="center" className="col-lg-8 col-md-6">
        <div className="nav">
          <div className="name">
            <h1>Burgers</h1>
            <img src={burgercolor} alt="" />
          </div>
          <div className="input mb-3">
            <input
              type="search"
              className="form-control"
              placeholder="Search here"
              // onChange={handleChange}
              // value={searchInput}
              // aria-describedby="basic-addon1"
            />
          </div>
        </div>

        <div className="menu row">
          {product.map((product, idx) => (
            <div
              key={idx}
              className="menu1 col-lg-3 col-md-3"
              onClick={() => postOrder(1, product.id)}
              // buat fungsi untuk manggil product yang tadi
            >
              <img
                className="img-fluid"
                src={`http://159.65.138.79:3001/${product.image}`} //bikin controller backend
                alt=""
              />
              <h2>{product.name}</h2>
              {/* <h3>{product.size}</h3> */}
              <h1>Rp. {product.price}</h1>
            </div>
          ))}
        </div>
        
      </div>
      <div id="kanan" className="col-lg-3 col-md-4">
        <div className="table-order">
          <img src={dinner} alt="" />
        </div>
        <div className="order">
          <button className="new-order">New Order</button>
          <button className="history-order">History Order</button>
        </div>
        <div className="order-section">
          <div className="order-page">
            {order.map((order, idx) => (
              <div className="order1" key={idx}>
                <input type="hidden" name="id" value={order.id} />
                <img
                  src={`http://159.65.138.79:3001/${order.product.image}`}
                  alt=""
                />
                <div className="info">
                  <div className="info-name">
                    <h2>{order.product.name}</h2>
                    <h3>{order.product.price}</h3>
                    <h4>{order.product.size}</h4>
                    <div className="button-order">
                      <div className="button-minus" onClick={decrementCounter}>
                        <img src={minus} alt="" />
                      </div>
                      <h4>{order.qtyOrder}</h4>
                      <div className="button-plus" onClick={incrementCounter}>
                        <img src={plus} alt="er" />
                      </div>
                    </div>
                  </div>

                  <div className="total">
                    <img src={close} alt="" />
                    <h1>{order.product.price * order.qtyOrder}</h1>
                  </div>
                </div>
              </div>
            ))}
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
            <h4>{amount}</h4>
            <h4>{tax}</h4>
            <h4>
              <span>{amount + tax}</span>
            </h4>
          </div>
        </div>

        <div
          className="submit-order"
          onClick={() => setIsCreateModalOpen(true)}
        >
          <img src={tick} alt="" />
          <h3>Submit Order</h3>
        </div>
        {/* <button onClick={() => setIsCreateModalOpen(true)}>submit</button> */}
      </div>
      <Modal
        title={`Tambah data customer ${orderID}`}
        isOpen={isCreateModalOpen}
        setOpen={setIsCreateModalOpen}
        id={parseInt(orderID)}
        children={
          <AddCustomer
            amount={amount}
            tax={tax}
            id={parseInt(orderID)}
          />
        }
      ></Modal>
    </div>
  );
};

export default Kasir;
