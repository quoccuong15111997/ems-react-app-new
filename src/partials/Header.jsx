import React, { useState,useEffect } from 'react';
import SearchModal from './header/SearchModal';
import Branch from "./header/Branch";
import Language from "./header/Language";
import UserMenu from './header/UserMenu';
import { NavLink } from "react-router-dom";
import LogoEMS from "../images/logo_ems.png";
import { useStateContext } from '../context/ContextProvider';

function Header({
  sidebarOpen,
  setSidebarOpen
}) {
  const { setScreenSize, screenSize, userData } = useStateContext();
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <header className="sticky top-0 bg-white border-b border-slate-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            <button
              className={`text-slate-500 hover:text-slate-600 ${userData == null ? 'hidden' :''}`}
              aria-controls="sidebar"
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
            <NavLink end to="/" className="block">
              <img src={LogoEMS} className="w-[200px] h-full p-5" />
            </NavLink>
          </div>

          {/* Header: Right side */}
          <div className="flex items-center">
            <Branch />
            <Language />
            {/*  Divider */}
            <hr className="w-px h-6 bg-slate-200 mx-3" />
            {userData && <UserMenu />}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;