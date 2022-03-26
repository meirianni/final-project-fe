import React, { useState, useEffect } from "react";
// import Modal from "../../component/modal.jsx";
import ReactPaginate from "react-paginate";

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
  const [product, setProduct] = useState([]);
  const [order, setOrder] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [counter, setCounter] = useState(1);
  const incrementCounter = (qty, id) => {
    setCounter(counter + 1);
    getOrder();
  }; // di tambah metode post axios untuk menambah qty sesuai order product id
  const decrementCounter = (qty, id) => {
    setCounter(counter - 1);
    getOrder();
  }; // di tambah metode post axio untuk mengurangi qty sesuai order product id
  const [postsPerPage] = useState(5);
  const [offset, setOffset] = useState(1);
  const [posts, setAllPosts] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  if (counter <= 0) {
    decrementCounter = () => setCounter(1);
  }
  const productApiURL = "http://localhost:3001/api/cashier/products/get";

  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBsb3llZUlkIjoxLCJlbXBsb3llZU5hbWUiOiJZdWtpIEYiLCJpYXQiOjE2NDc4NzI2NzUsImV4cCI6MTY0ODQ3NzQ3NX0.WrvoSbPv7Bj7RvzghYlvzemCKKZJn4cYTNSuZ3aEZj4";
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const getProduct = async () => {
    await axios
      .get(`http://localhost:3001/api/cashier/products/get`, config) //mengambil data dari server
      .then((response) => {
        //response :variabel
        // console.log(getProduct);

        setProduct(response.data.data);
      })
      .catch((err) => alert(err));
  };

  const getOrder = async () => {
    await axios
      .get(`http://localhost:3001/api/cashier/orders/cart`, config) //mengambil data dari server
      .then((response) => {
        //response :variabel
        // console.log(response);
        // alert("ok"); //kenapa tidak keluar!
        setOrder(response.data.data);
      })
      .catch((err) => alert(err));
  };
  // const getAllData = async () => {
  //   const res = await axios.get(`${productApiURL}`, config);
  //   const paginate = res.data;
  //   const slice = paginate.slice(offset - 1, offset - 1 + 1 + postsPerPage);

  //   // for displaying data
  //   const postData = getData(slice);

  //   //using hooks to set value
  //   setAllPosts(postData);
  //   setPageCount(Math.ceil(data.length / postsPerPage));
  // };

  const postOrder = async (qty, id) => {
    await axios
      .post(
        `localhost:3001/api/cashier/orders/cart`,
        {
          table: "Meja 1",
          qtyOrder: qty,
          productID: id,
        },
        config
      )
      .then((order) => {
        if (order.data.status === "success") {
          getOrder();
        }
        //setOrder((prevOrder) => [...prevOrder, order]);
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
              <img className="img-fluid" src={product.image} alt="" />
              <h2>{product.name}</h2>
              <h3>{product.size}</h3>
              <h1>Rp. {product.price}</h1>
            </div>
          ))}
        </div>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          // onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
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
                <img src={"localhost:3001/" + order.image} alt="" />
                <div className="info">
                  <h2>{order.product.name}</h2>
                  <h3>{order.product.price}</h3>
                  <h4>{order.product.size}</h4>
                  <div className="button-order">
                    <div
                      className="button-minus"
                      onClick={decrementCounter(order.qtyOrder, order.id)}
                    >
                      <img src={minus} alt="" />
                    </div>
                    <h4>{order.qtyOrder}</h4>
                    <div
                      className="button-plus"
                      onClick={incrementCounter(order.qtyOrder, order.id)}
                    >
                      <img src={plus} alt="er" />
                    </div>
                  </div>
                  <div className="total">
                    <img src={close} alt="" />
                    <h1>90.000</h1>
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
      </div>
    </div>
  );
};

export default Kasir;
