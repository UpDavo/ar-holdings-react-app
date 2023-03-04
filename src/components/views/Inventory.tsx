import React from "react";
import { GeneralHeader } from "../common/GeneralHeader";
import InventoryTable from "../tables/InventoryTable";

function Inventory() {
  return (
    <React.Fragment>
      <GeneralHeader title="Catálogo de Artículos" />

      <section className="grid grid-cols-1 mt-8 gap-8 z-0">
        <div className="rounded-xl bg-white p-5">
          <InventoryTable />
        </div>
      </section>
    </React.Fragment>
  );
}

export default Inventory;
