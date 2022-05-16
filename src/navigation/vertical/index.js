import {
  Mail,
  Home,
  Users,
  Circle,
  Clipboard,
  PlusCircle,
} from "react-feather";
import { FormattedMessage } from "react-intl";
import { IntlContext } from "../../utility/context/Internationalization";
export default [
  // {
  //   id: "dashboard",
  //   icon: <Home size={20} />,
  //   title: <FormattedMessage id={"Dashboard"} defaultMessage="Dashboard" />,
  //   navLink: "/",
  //   permissions: ["admin", "inspector"],
  // },
  {
    id: "user",
    title: <FormattedMessage id={"Users"} defaultMessage="Users" />,
    icon: <Users size={20} />,
    permissions: ["admin"],
    children: [
      {
        id: "add",
        title: <FormattedMessage id={"Add"} defaultMessage="Add" />,
        navLink: "user/add",
        permissions: ["admin"],
      },
      {
        id: "list",
        title: <FormattedMessage id={"List"} defaultMessage="List" />,
        navLink: "user/list",
        permissions: ["admin"],
      },
    ],
  },
  {
    id: "region",
    title: <FormattedMessage id={"Region"} defaultMessage="Region" />,
    icon: <Circle size={20} />,
    permissions: ["admin"],

    children: [
      {
        id: "add",
        title: <FormattedMessage id={"Add"} defaultMessage="Add" />,
        navLink: "region/add",
        permissions: ["admin"],
      },
      {
        id: "list",
        title: <FormattedMessage id={"List"} defaultMessage="List" />,
        navLink: "region/list",
        permissions: ["admin"],
      },
    ],
  },
  {
    id: "site",
    title: <FormattedMessage id={"Site"} defaultMessage="Site" />,
    icon: <PlusCircle size={20} />,
    permissions: ["admin"],

    children: [
      {
        id: "add",
        title: <FormattedMessage id={"Add"} defaultMessage="Add" />,
        navLink: "site/add",
        permissions: ["admin"],
      },
      {
        id: "list",
        title: <FormattedMessage id={"List"} defaultMessage="List" />,
        navLink: "site/list",
        permissions: ["admin"],
      },
    ],
  },
  {
    id: "Field Survey",
    title: (
      <FormattedMessage id={"Field survey"} defaultMessage="Field survey" />
    ),
    icon: <Clipboard size={20} />,
    permissions: ["admin", "inspector"],

    children: [
      {
        id: "add",
        title: <FormattedMessage id={"Add"} defaultMessage="Add" />,
        navLink: "fieldSurvey/add",
        permissions: ["admin", "inspector"],
      },
      {
        id: "list",
        title: <FormattedMessage id={"List"} defaultMessage="List" />,
        navLink: "fieldSurvey/list",
        permissions: ["admin"],
      },
    ],
  },
];
