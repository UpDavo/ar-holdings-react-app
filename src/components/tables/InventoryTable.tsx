import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import MiniImageIventory from "../common/MiniImageInventory";
import { ProgressComponent } from "../common/Progress";


const URL = "https://ar-holdings-api.herokuapp.com";

function InventoryTable() {
  const [pending, setPending] = useState(true);
  const [products, setProducts] = useState([]);

  //funcion para consumir api
  const showProducts = async () => {
    const api_headers = new Headers();
    api_headers.append(
      "Authorization",
      "Token 9cbd25610f74eb64a5501db6fe0da24c12f6a182"
    );
    const data = await fetch(URL + "/api/products/getProducts", {
      method: "GET",
      headers: api_headers,
      redirect: "follow",
    });
    const data_json = await data.json();
    const mapped = data_json.map((product: any) => {
      let date = new Date(Date.parse(product.UltimaFechaActualizacion));
      return {
        image: <MiniImageIventory image={product.ImagenURI} />,
        name: product.Nombre,
        stock: product.Cantidad,
        date: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
        // button: <RelocatedOrdersButton orderId={order.ID} />,
      };
    });
    setProducts(mapped);
    setPending(false);
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
      name: "Fecha última Actualización",
      selector: (row: any) => row.date,
      sortable: true,
    },
    // {
    //   name: "Actions",
    //   selector: (row: any) => row.button,
    //   sortable: false,
    // },
  ];

  const paginationOptions = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };

  return (
    <div>
      <h1 className="text-xl ">Productos Agregados</h1>
      <div className="mt-6">
        <DataTable
          columns={columns}
          data={products}
          progressPending={pending}
          progressComponent={<ProgressComponent/>}
          pagination
          paginationComponentOptions={paginationOptions}
        />
      </div>
    </div>
  );
}

export default InventoryTable;
