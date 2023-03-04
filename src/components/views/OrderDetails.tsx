import React from "react";
import { useParams } from "react-router-dom";
import { GeneralHeader } from "../common/GeneralHeader";
import OrdersDetailsTable from "../tables/OrdersDetailsTable";
import { NavLink } from "react-router-dom";

function OrderDetails() {
  const { id } = useParams() as any;
  const [total, setTotal] = React.useState(0);

  const getData = (data: any) => {
    setTotal(data);
  };

  return (
    <React.Fragment>
      <GeneralHeader title="Detalle de Compra" />
      <section className="grid grid-cols-1 mt-8 gap-8 z-0">
        <div className="rounded-xl bg-white p-5">
          <h1 className="text-xl mt-3 ml-2">Orden: #{id}</h1>
          <OrdersDetailsTable search_id={id} onComplete={getData} />
          <div className="flex justify-end mr-4 mt-2">
            <h1 className="text-xl font-bold">Total: ${total}</h1>
          </div>
          <div className="mt-6">
            <NavLink
              to="/orders"
              className="btn btn-primary btn-block text-white"
            >
              Volver a las compras
            </NavLink>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default OrderDetails;
