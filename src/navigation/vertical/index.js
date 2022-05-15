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
  {
    id: "user",
    title: <FormattedMessage id={"Users"} defaultMessage="Users" />,
    icon: <Users size={20} />,
    children: [
      {
        id: "add",
        title: <FormattedMessage id={"Add"} defaultMessage="Add" />,
        navLink: "user/add",
      },
      {
        id: "list",
        title:<FormattedMessage id={"List"} defaultMessage="List" /> ,
        navLink: "user/list",
      },
    ],
  },
  {
    id: "region",
    title: <FormattedMessage id={"Region"} defaultMessage="Region" />,
    icon: <Circle size={20} />,
    children: [
      {
        id: "add",
        title: <FormattedMessage id={"Add"} defaultMessage="Add" />,
        navLink: "region/add",
      },
      {
        id: "list",
        title:<FormattedMessage id={"List"} defaultMessage="List" />,
        navLink: "region/list",
      },
    ],
  },
  {
    id: "site",
    title: <FormattedMessage id={"Site"} defaultMessage="Site" />,
    icon: <PlusCircle size={20} />,
    children: [
      {
        id: "add",
        title: <FormattedMessage id={"Add"} defaultMessage="Add" />,
        navLink: "site/add",
      },
      {
        id: "list",
        title:<FormattedMessage id={"List"} defaultMessage="List" />,
        navLink: "site/list",
      },
    ],
  },
  {
    id: "Field Survey",
        title: <FormattedMessage id={"Field Survey"} defaultMessage="Field Survey" />,
    icon: <Clipboard size={20} />,
    children: [
      {
        id: "add",
        title: <FormattedMessage id={"Add"} defaultMessage="Add" />,
        navLink: "fieldSurvey/add",
      },
      {
        id: "list",
        title:<FormattedMessage id={"List"} defaultMessage="List" />,
        navLink: "fieldSurvey/list",
      },
    ],
  },
];
