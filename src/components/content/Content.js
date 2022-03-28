import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import {  Route, Routes } from "react-router-dom";


const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <h1>Welcome in Dine In</h1>
  </Container>
);

export default Content;
