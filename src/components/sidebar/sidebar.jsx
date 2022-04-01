import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";

import SubMenu from "./sideMenu";

const Logout = ()=>{
  localStorage.setItem( "mini-pos:token", "");
  window.location = '/'
} 

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>Dine In POS</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <NavItem>
          <NavLink tag={Link} to={"/admin"}>
            <FontAwesomeIcon icon={faHome} className="mr-2" />
             &nbsp; Admin
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/kasir"}>
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            &nbsp; Cashier
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/kichen"}>
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
            &nbsp; Kichen
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink  onClick={Logout}>
            <FontAwesomeIcon icon={faLock} className="mr-2" />
            &nbsp; Logout
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

const submenus = [
  [
    {
      title: "Home 1",
      target: "Home-1",
    },
    {
      title: "Home 2",
      target: "Home-2",
    },
    {
      itle: "Home 3",
      target: "Home-3",
    },
  ],
  [
    {
      title: "Page 1",
      target: "Page-1",
    },
    {
      title: "Page 2",
      target: "Page-2",
    },
  ],
];

export default SideBar;
