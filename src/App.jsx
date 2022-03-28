//import "./App.css";
import "./index.scss";
import Auth from './pages/login';
import Admin from './pages/admin';
import Kasir from './pages/kasir';
import Kitchen from './pages/kitchen';
import KitchenDone from './pages/kitchenDone';

import { setAuthorizationHeader } from "./services/axios";

import React, { useEffect } from "react";
import { createBrowserHistory } from "history";
import {
  Routes,
  Route,
  useLocation,
  Navigate,
  BrowserRouter,
  Outlet
} from 'react-router-dom'
import { useDispatch } from "react-redux";


function NotFound() {
  return (
    <div className="home">
      <p>
        NOT FOUND 404
        <br />
        return to <a href='/'> HomePage </a> ?
      </p>
    </div>
  );
}

function RequireAuth() {
  let auth = localStorage.getItem('mini-pos:token');
  let location = useLocation();
  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  //Renders child route's element, jika ada.
   return <Outlet />;
}

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   let session = null;
  //    if (localStorage.getItem("mini-pos:token")) {
  //      session = JSON.parse(localStorage.getItem("mini-pos:token"));
  //     setAuthorizationHeader(session.token);

  //    }
  // }, [dispatch]);

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>

          <Route>
            
            <Route path="/kasir" element={<Kasir />} />


            <Route path="/login" element={<Auth />} />
            <Route element={<RequireAuth />}>
              <Route path="/" element={<Admin />} />
              <Route index path="/admin" element={<Admin />} />
              <Route path="/kichen" element={ <Kitchen /> } />
              <Route path="/kichen/done" element={ <KitchenDone /> } />
            </Route>

          </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter> 
    </div>
  );
}

export default App;
