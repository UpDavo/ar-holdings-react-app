import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import RelocatedOrdersButton from "../common/RelocateOrdersButton";

const URL = "http://127.0.0.1:8000";

function OrdersTable() {
  const [orders, setOrders] = useState([]);

  //funcion para consumir api
  const showInvoices = async () => {
    const data = await fetch(URL + "/api/invoice/getInvoice");
    const data_json = await data.json();
    const mapped = data_json.map((order: any) => {
      let date = new Date(Date.parse(order.Fecha));
      return {
        id: order.ID,
        client: order.cliente[0].Nombre,
        value: order.Total,
        date: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
        button: <RelocatedOrdersButton orderId={order.ID} />,
      };
    });
    // console.log(mapped);
    setOrders(mapped);
  };

  useEffect(() => {
    showInvoices();
  }, []);

  const columns: any = [
    {
      name: "#Orden",
      selector: (row: any) => row.id,
      sortable: true,
    },
    {
      name: "Cliente",
      selector: (row: any) => row.client,
      sortable: false,
    },
    {
      name: "Monto",
      selector: (row: any) => row.value,
      sortable: true,
    },
    {
      name: "Fecha",
      selector: (row: any) => row.date,
      sortable: true,
    },
    {
      name: "Actions",
      selector: (row: any) => row.button,
      sortable: false,
    },
  ];

  const paginationOptions = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };

  return (
    <div>
      <h1 className="text-xl">Compras Recientes</h1>
      <div className="mt-6">
        <DataTable
          columns={columns}
          data={orders}
          pagination
          paginationComponentOptions={paginationOptions}
        />
      </div>
    </div>
  );
}

export default OrdersTable;
