import React from "react";
import Header from "./header";

import { Outlet } from "react-router-dom";

const layout = ({ handleLogout, cart }) => {
  return (
    <>
      <Header handleLogout={handleLogout} cart={cart} />
      <Outlet />
    </>
  );
};

export default layout;
