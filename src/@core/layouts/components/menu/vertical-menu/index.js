// ** React Imports
import { Fragment, useState, useRef } from "react";
// ** Third Party Components
import PowerPic from "../../../../../assets/images/logo/footer-1.svg";
import classnames from "classnames";
import PerfectScrollbar from "react-perfect-scrollbar";
import SideImage from "./BottomPic.svg";
import SideBarImg from "./sideBar-Image.jpg";
// ** Vertical Menu Components
import VerticalMenuHeader from "./VerticalMenuHeader";
import VerticalNavMenuItems from "./VerticalNavMenuItems";
// import bottomPattern from "../../../../../assets/images/pages/patern.svg";
import PowerBy from "../../../../../views/Heloper/PowerBy";
const Sidebar = (props) => {
  // ** Props
  const { menuCollapsed, menu, skin, menuData } = props;

  // ** States
  const [groupOpen, setGroupOpen] = useState([]);
  const [groupActive, setGroupActive] = useState([]);
  const [currentActiveGroup, setCurrentActiveGroup] = useState([]);
  const [activeItem, setActiveItem] = useState(null);

  // ** Menu Hover State
  const [menuHover, setMenuHover] = useState(false);

  // ** Ref
  const shadowRef = useRef(null);

  // ** Function to handle Mouse Enter
  const onMouseEnter = () => {
    setMenuHover(true);
  };

  // ** Scroll Menu
  const scrollMenu = (container) => {
    if (shadowRef && container.scrollTop > 0) {
      if (!shadowRef.current.classList.contains("d-block")) {
        shadowRef.current.classList.add("d-block");
      }
    } else {
      if (shadowRef.current.classList.contains("d-block")) {
        shadowRef.current.classList.remove("d-block");
      }
    }
  };
  return (
    <Fragment>
      <div
        style={{
          backgroundImage: `url(${SideBarImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className={classnames(
          "main-menu menu-fixed menu-accordion menu-shadow ",
          {
            expanded: menuHover || menuCollapsed === false,
            "menu-light": skin !== "semi-dark" && skin !== "dark",
            "menu-dark": skin === "semi-dark" || skin === "dark",
          },
          {}
        )}
        onMouseEnter={onMouseEnter}
        onMouseLeave={() => setMenuHover(false)}
      >
        {menu ? (
          menu({ ...props })
        ) : (
          <Fragment>
            {/* Vertical Menu Header */}
            <VerticalMenuHeader
              setGroupOpen={setGroupOpen}
              menuHover={menuHover}
              {...props}
            />
            {/* Vertical Menu Header Shadow */}
            <div className="shadow-bottom " ref={shadowRef}></div>
            {/* Perfect Scrollbar */}

            <PerfectScrollbar
              // style={{

              //   backgroundImage:`url(${SideBarImg})`,
              //   backgroundPosition: 'center',
              //   backgroundSize: 'cover',
              //   backgroundRepeat: 'no-repeat',

              //  }}
              className="main-menu-content "
              options={{ wheelPropagation: false }}
              onScrollY={(container) => scrollMenu(container)}
            >
              <ul className="navigation navigation-main">
                <VerticalNavMenuItems
                  items={menuData}
                  menuData={menuData}
                  menuHover={menuHover}
                  groupOpen={groupOpen}
                  activeItem={activeItem}
                  groupActive={groupActive}
                  setGroupOpen={setGroupOpen}
                  menuCollapsed={menuCollapsed}
                  setActiveItem={setActiveItem}
                  setGroupActive={setGroupActive}
                  currentActiveGroup={currentActiveGroup}
                  setCurrentActiveGroup={setCurrentActiveGroup}
                />
              </ul>
              {(!props.menuCollapsed || menuHover) && (
                <ul>
                  <div className="SideBottom w-100">
                    <div className="sidePowerBy">
                      <PowerBy icons={PowerPic} />
                    </div>
                  </div>
                </ul>
              )}
            </PerfectScrollbar>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default Sidebar;
