import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import MiniImageIventory from "../common/MiniImageInventory";

const URL = "https://ar-holdings-api.herokuapp.com";

function OrdersDetailsTable(props: any) {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  //funcion para consumir api
  const showProducts = async () => {
    const api_headers = new Headers();
    api_headers.append(
      "Authorization",
      "Token 9cbd25610f74eb64a5501db6fe0da24c12f6a182"
    );
    const data = await fetch(
      URL + "/api/invoice/getInvoice/" + props.search_id,
      { method: "GET", headers: api_headers, redirect: "follow" }
    );
    const data_json = await data.json();
    const mapped = data_json[0].detalle.map((product: any) => {
      return {
        image: <MiniImageIventory image={product.ImagenURL} />,
        name: product.Nombre,
        stock: product.Cantidad,
        total: product.Total,
      };
    });
    setProducts(mapped);
    setTotal(data_json[0].Total);
  };

  useEffect(() => {
    showProducts();
  }, []);

  const columns: any = [
    {
      name: "Imagen",
      selector: (row: any) => row.image,
      sortable: false,
    },
    {
      name: "Nombre",
      selector: (row: any) => row.name,
      sortable: false,
    },
    {
      name: "Cantidad",
      selector: (row: any) => row.stock,
      sortable: true,
    },
    {
      name: "Total",
      selector: (row: any) => row.total,
      sortable: true,
    },
  ];

  props.onComplete(total);

  return (
    <div>
      <div className="mt-6">
        <DataTable columns={columns} data={products} />
      </div>
    </div>
  );
}

export default OrdersDetailsTable;
