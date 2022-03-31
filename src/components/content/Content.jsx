import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import {  Route, Routes } from "react-router-dom";


const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <center><h1>Welcome Dine In POS</h1></center>
  </Container>
);

export default Content;
