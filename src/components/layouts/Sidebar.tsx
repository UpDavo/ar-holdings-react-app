import { useState, useEffect } from "react";
import { RiMenuLine, RiCloseFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { SidebarData } from "../data/SidebarData";

function Sidebar() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const general =
    "flex items-center gap-4 py-2 px-4 rounded-xl transition-colors font-bold";

  const notActiveLink = "hover:text-primary text-white hover:bg-secondary";
  const activeLink = "text-primary bg-secondary";

  //It detects when path changes an hides menu
  useEffect(() => {
    setShowMenu(false);
  }, [location.pathname]);

  return (
    <>
      <div
        className={`z-10 bg-primary h-full fixed lg:static w-[65%] md:w-[40%] lg:w-full transition-all duration-300 ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
        {/* logo */}
        <div className="flex flex-col items-left justify-center p-4 ml-5 gap-2 h-[20vh]">
          <img src="/img/logo-white.png" alt="Logo-ar" className="w-40" />
        </div>

        {/* nav */}
        <div className="p-4 h-[80vh] overflow-y-auto flex flex-col justify-between gap-8">
          <nav className="flex flex-col gap-3">
            {SidebarData.map((item, index) => {
              return (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? general + " " + activeLink
                      : general + " " + notActiveLink
                  }
                >
                  {item.icon} {item.title}
                </NavLink>
              );
            })}
          </nav>
          <div className="bg-secondary rounded-xl p-3">
            <p>Desarrollo realizado por:</p>
            <a className="font-bold" href="https://github.com/UpDavo">
              Anthony Villegas
            </a>
          </div>
        </div>
      </div>
      {/* button mobile*/}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden fixed right-4 bottom-4 text-2xl bg-primary text-white p-3 rounded-full"
      >
        {showMenu ? <RiCloseFill /> : <RiMenuLine />}
      </button>
    </>
  );
}

export default Sidebar;
