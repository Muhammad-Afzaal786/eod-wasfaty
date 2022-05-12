// ** React Imports
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

// ** Icons Imports
import { Disc, X, Circle } from "react-feather";

// ** Config
import themeConfig from "@configs/themeConfig";
import smallLogo from "../../../../../assets/images/logo/MOT-favicon.svg";
// ** Utils
import { getUserData, getHomeRouteForLoggedInUser } from "@utils";

const VerticalMenuHeader = (props) => {
  // ** Props
  const {
    menuCollapsed,
    setMenuCollapsed,
    setMenuVisibility,
    setGroupOpen,
    menuHover,
  } = props;

  // ** Vars
  const user = getUserData();

  // ** Reset open group
  useEffect(() => {
    if (!menuHover && menuCollapsed) setGroupOpen([]);
  }, [menuHover, menuCollapsed]);

  // ** Menu toggler component
  const Toggler = () => {
    if (!menuCollapsed) {
      return (
        <Disc
          size={20}
          data-tour="toggle-icon"
          className="text-white toggle-icon d-none d-xl-block"
          onClick={() => setMenuCollapsed(true)}
        />
      );
    } else {
      return (
        <Circle
          size={20}
          data-tour="toggle-icon"
          className="text-white toggle-icon d-none d-xl-block"
          onClick={() => setMenuCollapsed(false)}
        />
      );
    }
  };
  return (
    <div className="navbar-header  ">
      <ul className="nav navbar-nav flex-row">
        <li className="nav-item me-auto">
          <NavLink to={"/"} className="navbar-brand">
            {/* <span className="brand-logo"> */}
            {menuCollapsed && !menuHover ? (
              <img
                src={smallLogo}
                alt="logo"
                style={{
                  height: 55,
                  width: 50,
                  marginTop: -20,
                }}
              />
            ) : (
              <img
                src={themeConfig.app.appLogoImage}
                alt="logo"
                style={{
                  height: 70,
                  width: 170,
                  marginTop: -25,
                }}
              />
            )}
            {/* </span> */}
            {/* <h2 className="brand-text mb-0 text-white">
              {themeConfig.app.appName}
            </h2> */}
          </NavLink>
        </li>
        <li className="nav-item nav-toggle">
          <div className="nav-link modern-nav-toggle cursor-pointer">
            <Toggler />
            <X
              onClick={() => setMenuVisibility(false)}
              className="toggle-icon icon-x d-block d-xl-none"
              size={20}
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default VerticalMenuHeader;
