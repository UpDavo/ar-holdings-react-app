import React from "react";
import { GeneralHeader } from "../common/GeneralHeader";
import OrdersTable from "../tables/OrdersTable";

function Orders() {
  return (
    <React.Fragment>
      <GeneralHeader title="Compras" />
      <section className="grid grid-cols-1 mt-8 gap-8 z-0">
        <div className="rounded-xl bg-white p-5">
          <OrdersTable />
        </div>
      </section>
    </React.Fragment>
  );
}

export default Orders;
