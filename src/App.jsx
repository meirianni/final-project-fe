import "./index.scss";

import Auth from "./pages/login";
import Admin from "./pages/admin";
import Kasir from "./pages/kasir";
import Kitchen from "./pages/kitchen";
import KitchenDone from "./pages/kitchenDone";

import React from "react";
import {
  Routes,
  Route,
  useLocation,
  Navigate,
  BrowserRouter,
  Outlet,
} from "react-router-dom";


function NotFound() {
  return (
    <div className="home">
      <p>
        NOT FOUND 404
        <br />
        return to <a href="/"> HomePage </a> ?
      </p>
    </div>
  );
}

function RequireAuth() {
  let auth = localStorage.getItem("mini-pos:token");
  let location = useLocation();
  if (!auth || auth === "") {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  //Renders child route's element, jika ada.
  return <Outlet />;
}

function App() {
  if(!localStorage.getItem("mini-pos:token")){
    localStorage.setItem( "mini-pos:token", "");
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/login" element={<Auth />} />
            <Route element={<RequireAuth />}>
              <Route path="/" element={<Admin />} />
              <Route index path="/admin" element={<Admin />} />
              <Route path="/kichen" element={<Kitchen />} />
              <Route path="/kichen/done" element={<KitchenDone />} />
            <Route path="/kasir" element={<Kasir />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
