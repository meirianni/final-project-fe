import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import SideBar from "../components/sidebar/sidebar";
import Content from "../components/content/Content";


  const Admin = () => {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

    return (
        <div className="Kichen wrapper">
          <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
          <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
        </div>     
    );
  }


export default Admin;
