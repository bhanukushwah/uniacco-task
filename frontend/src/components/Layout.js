import React from "react";

import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="layout-container">
      <div>
        <Navbar />
      </div>
      <div className="auth-wrapper">
        <div className="auth-inner">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
