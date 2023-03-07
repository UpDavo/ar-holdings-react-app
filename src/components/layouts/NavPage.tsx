import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Inventory from "../views/Inventory";
import OrderDetails from "../views/OrderDetails";
import Orders from "../views/Orders";

function NavPage() {
  return (
    <React.Fragment>
      <main className="lg:col-span-3 xl:col-span-5 h-screen overflow-y-auto">
        {/* <div className="bg-primary h-[7%]">
          <div className="flex justify-end items-center">
            <div className="lg:mr-3 lg:mt-3 mt-3">
              <h1 className="text-white font-bold">Nombre de usuario</h1>
            </div>
            <div className="invisible lg:visible bg-white h-10 w-10 rounded-full mr-4 mt-2"></div>
          </div>
        </div> */}
        <div className="p-6 md:p-10">
          <Routes>
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/:id" element={<OrderDetails />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="*" element={<Navigate to="/orders" />} />
            <Route path="/" element={<Navigate to="/orders" />} />
          </Routes>
        </div>
      </main>
    </React.Fragment>
  );
}

export default NavPage;
