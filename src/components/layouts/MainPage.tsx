import React from "react";
import NavPage from "./NavPage";
import Sidebar from "./Sidebar";

function MainPage() {
  return (
    <React.Fragment>
      <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
        <Sidebar />
        <NavPage />
      </div>
    </React.Fragment>
  );
}

export default MainPage;
