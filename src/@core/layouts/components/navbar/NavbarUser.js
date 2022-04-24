// ** Dropdowns Imports
import { NavItem, NavLink } from "reactstrap";
import IntlDropdown from "./IntlDropdown";
import Language from "./Language";
import UserDropdown from "./UserDropdown";

const NavbarUser = () => {
  return (
    <ul className="nav navbar-nav align-items-center ms-auto">
      {/* <IntlDropdown /> */}
      <NavItem className="d-none d-lg-block">
        <NavLink className="nav-link-style">{/* <Language /> */}</NavLink>
      </NavItem>

      <UserDropdown />
    </ul>
  );
};
export default NavbarUser;
