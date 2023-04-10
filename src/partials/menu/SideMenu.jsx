import React from 'react'
import SidebarLinkGroup from '../SidebarLinkGroup';
const SideMenu = (props) => {
  return (
    <ul className="mt-1">
      {/* Trình ký chứng từ */}
      {props.item.SUB_MENU.map((subMenu) => (
        <SidebarLinkGroup
          key={v4()}
          activecondition={pathname.includes(subMenu.TREECODE)}
        >
          {(handleClick, open) => {
            return (
              <React.Fragment>
                <a
                  href="#0"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes(subMenu.TREECODE)
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                  }}
                >
                  <div className="flex items-center justify-between rounded-lg text-gray-900 hover:bg-primary hover:text-white p-2">
                    <div className="flex items-center">
                      <svg className="shrink-0 h-4 w-4" viewBox="0 0 24 24">
                        <path
                          className={`fill-current ${
                            pathname.includes(subMenu.TREECODE)
                              ? "text-indigo-300"
                              : "text-slate-400"
                          }`}
                          d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"
                        />
                        <path
                          className={`fill-current ${
                            pathname.includes(subMenu.TREECODE)
                              ? "text-indigo-600"
                              : "text-slate-700"
                          }`}
                          d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"
                        />
                        <path
                          className={`fill-current ${
                            pathname.includes(subMenu.TREECODE)
                              ? "text-indigo-500"
                              : "text-slate-600"
                          }`}
                          d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"
                        />
                      </svg>
                      <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                        {subMenu.PRCSNAME}
                      </span>
                    </div>
                    {/* Icon */}
                    <div className="flex shrink-0 ml-2">
                      <svg
                        className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                          open && "rotate-180"
                        }`}
                        viewBox="0 0 12 12"
                      >
                        <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                      </svg>
                    </div>
                  </div>
                </a>
                <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                  {subMenu.SUB_MENU && (<SideMenu item={subMenu}/>)}
                </div>
              </React.Fragment>
            );
          }}
        </SidebarLinkGroup>
      ))}
    </ul>
  );
}

export default SideMenu