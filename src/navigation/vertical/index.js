import {
  Mail,
  Home,
  Users,
  Circle,
  Clipboard,
  PlusCircle,
} from "react-feather";
export default [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: <Home size={20} />,
    navLink: "/",
    permissions: ["admin", "inspector"],
  },
  {
    id: "user",
    title: "Users",
    icon: <Users size={20} />,
    permissions: ["admin"],
    children: [
      {
        id: "add",
        title: "Add",
        navLink: "user/add",
        permissions: ["admin"],
      },
      {
        id: "list",
        title: "List",
        navLink: "user/list",
        permissions: ["admin"],
      },
    ],
  },
  {
    id: "region",
    title: "Region",
    icon: <Circle size={20} />,
    permissions: ["admin"],

    children: [
      {
        id: "add",
        title: "Add",
        navLink: "region/add",
        permissions: ["admin"],
      },
      {
        id: "list",
        title: "List",
        navLink: "region/list",
        permissions: ["admin"],
      },
    ],
  },
  {
    id: "site",
    title: "Site",
    icon: <PlusCircle size={20} />,
    permissions: ["admin"],

    children: [
      {
        id: "add",
        title: "Add",
        navLink: "site/add",
        permissions: ["admin"],
      },
      {
        id: "list",
        title: "List",
        navLink: "site/list",
        permissions: ["admin"],
      },
    ],
  },
  {
    id: "Field Survey",
    title: "Field survey",

    icon: <Clipboard size={20} />,
    permissions: ["admin", "inspector"],

    children: [
      {
        id: "add",
        title: "Add",
        navLink: "fieldSurvey/add",
        permissions: ["admin", "inspector"],
      },
      {
        id: "list",
        title: "List",
        navLink: "fieldSurvey/list",
        permissions: ["admin"],
      },
    ],
  },
];
