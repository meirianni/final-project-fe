import React from "react";
import logo from "../assets/logo.png";
import bell from "../assets/desk-bell.png";
import checklist from "../assets/checklist.png";

function Kitchen() {
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
          <a href="" className="choices">
            <img src={bell} alt="" />
            <h2>New Order</h2>{" "}
          </a>
          {/* <div className="choices">
            <img src={alldish} alt="" />
            <h2>New Order</h2>{" "}
          </div> */}
          <div className="choices">
            <img src={checklist} alt="" />
            <h2>Order Done</h2>{" "}
          </div>
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
          <h2> 07 / 03 / 2022 </h2>
        </div>
        <div className="menu">
          <div className="menu1">
            <h1>#606</h1>
            <h2>Ughtea</h2>
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
                  <tr>
                    <th scope="row">1</th>
                    <td>BurgerCheese</td>
                    <td>300g</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Brulle</td>
                    <td>500g</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Red Velvet</td>
                    <td>500ml</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
              <button className="btn-done">Done</button>
            </div>
          </div>
          <div className="menu1">
            <h1>#606</h1>
            <h2>Ughtea</h2>
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
                  <tr>
                    <th scope="row">1</th>
                    <td>BurgerCheese</td>
                    <td>300g</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Brulle</td>
                    <td>500g</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Red Velvet</td>
                    <td>500ml</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
              <button className="btn-done">Done</button>
            </div>
          </div>
          <div className="menu1">
            <h1>#606</h1>
            <h2>Ughtea</h2>
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
                  <tr>
                    <th scope="row">1</th>
                    <td>BurgerCheese</td>
                    <td>300g</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Brulle</td>
                    <td>500g</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Red Velvet</td>
                    <td>500ml</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
              <button className="btn-done">Done</button>
            </div>
          </div>
          <div className="menu1">
            <h1>#606</h1>
            <h2>Ughtea</h2>
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
                  <tr>
                    <th scope="row">1</th>
                    <td>BurgerCheese</td>
                    <td>300g</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Brulle</td>
                    <td>500g</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Red Velvet</td>
                    <td>500ml</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
              <button className="btn-done">Done</button>
            </div>
          </div>
          <div className="menu1">
            <h1>#606</h1>
            <h2>Ughtea</h2>
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
                  <tr>
                    <th scope="row">1</th>
                    <td>BurgerCheese</td>
                    <td>300g</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Brulle</td>
                    <td>500g</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Red Velvet</td>
                    <td>500ml</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
              <button className="btn-done">Done</button>
            </div>
          </div>
          <div className="menu1">
            <h1>#606</h1>
            <h2>Ughtea</h2>
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
                  <tr>
                    <th scope="row">1</th>
                    <td>BurgerCheese</td>
                    <td>300g</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Brulle</td>
                    <td>500g</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Red Velvet</td>
                    <td>500ml</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
              <button className="btn-done">Done</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Kitchen;
