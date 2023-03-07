import { RiFoggyFill } from "react-icons/ri";
import Swal from "sweetalert2";
const URL = "https://ar-holdings-api.herokuapp.com";

export const GeneralHeader = (props: any) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const syncData = async () => {
    const api_headers = new Headers();
    api_headers.append(
      "Authorization",
      "Token 9cbd25610f74eb64a5501db6fe0da24c12f6a182"
    );
    const data = await fetch(URL + "/api/products/bulkInsertProduct/", {
      method: "GET",
      headers: api_headers,
      redirect: "follow",
    });

    Toast.fire({
      icon: "success",
      title: "Los registros se han sincronizado correctamente",
    });
  };

  return (
    <header className="flex items-center justify-between z-0">
      <h1 className="text-3xl font-bold">{props.title}</h1>
      {props.button ? (
        <button
          onClick={syncData}
          className="btn btn-primary btn-sm gap-2 text-white"
        >
          <RiFoggyFill />
          Sincronizar los registros
        </button>
      ) : (
        ""
      )}
    </header>
  );
};
