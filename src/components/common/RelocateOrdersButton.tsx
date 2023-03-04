import React from "react";
import { RiEyeFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

function RelocatedOrdersButton(props: any) {
  return (
    <React.Fragment>
      <NavLink
        to={"/orders/" + props.orderId}
        className="btn btn-sm btn-outline btn-primary"
      >
        <RiEyeFill />
        Ver Orden
      </NavLink>
    </React.Fragment>
  );
}

export default RelocatedOrdersButton;
