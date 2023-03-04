import React from "react";
import { Routes, Route } from "react-router-dom";
import Inventory from "../views/Inventory";
import OrderDetails from "../views/OrderDetails";
import Orders from "../views/Orders";

function NavPage() {
  return (
    <React.Fragment>
      <main className="p-6 md:p-10 lg:col-span-3 xl:col-span-5">
        <Routes>
          <Route path="/" element={<Orders />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:id" element={<OrderDetails />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default NavPage;
