// ** React Imports
import { Link, useNavigate } from "react-router-dom";

// ** Custom Components
import Avatar from "@components/avatar";

// ** Third Party Components
import {
  User,
  Mail,
  CheckSquare,
  MessageSquare,
  Settings,
  CreditCard,
  HelpCircle,
  Power,
  UserPlus,
  UserX,
} from "react-feather";

// ** Reactstrap Imports
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";

// ** Default Avatar Image
import defaultAvatar from "@src/assets/images/portrait/small/avatar-s-11.jpg";
import { SC } from "../../../../views/Heloper/Apicall/ServerCall";
import { Logout } from "../../../../views/Heloper/Apicall/endPoints";

const UserDropdown = () => {
  let navigate = useNavigate();
  const logOut = () => {
    SC.getCall(Logout).then((res) => {
      if (res.status === 200) {
        localStorage.clear();
        navigate("/login");
      }
    });
  };
  let user = JSON.parse(localStorage.getItem("loginUser"));
  return (
    <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
      <DropdownToggle
        href="/"
        tag="a"
        className="nav-link dropdown-user-link"
        onClick={(e) => e.preventDefault()}
      >
        {/* {intlContext.locale === "en" ? (
          <span className="CustomLanguage">
            <strong
              className={
                intlContext.locale === "sa" ? "Black m-25" : "text-info m-25"
              }
              onClick={() => RTL("en")}
            >
              {"English "}
            </strong>

            <strong className="text-info">|</strong>
            <strong
              className={
                intlContext.locale === "en" ? "Black m-25" : "text-info m-25"
              }
              onClick={() => RTL("sa")}
            >
              {"العربية"}
            </strong>
          </span>
        ) : (
          <span className="CustomLanguage">
            <strong
              className={
                intlContext.locale === "en" ? "Black m-25" : "text-info m-25"
              }
              onClick={() => RTL("sa")}
            >
              {"العربية"}
            </strong>

            <strong className="text-info">|</strong>
            <strong className="Black m-25" onClick={() => RTL("en")}>
              {"English "}
            </strong>
          </span>
        )} */}

        <div className="user-nav d-sm-flex d-none">
          <span className="user-name fw-bold">{user?.name || "?"}</span>
          <span className="user-status">{user?.type || "admin"}</span>
        </div>
        <Avatar icon={<User />} imgHeight="40" imgWidth="40" status="online" />
      </DropdownToggle>
      <DropdownMenu end>
        <DropdownItem onClick={() => logOut()} className="w-100">
          <Power size={14} className="me-75" />
          <span className="align-middle">Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default UserDropdown;
