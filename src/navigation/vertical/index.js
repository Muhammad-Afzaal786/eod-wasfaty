import { Mail, Home, Users } from "react-feather";

export default [
  {
    id: "user",
    title: "Users",
    icon: <Users size={20} />,
    children: [
      {
        id: "add",
        title: "Add",
        navLink: "user/add",
      },
      {
        id: "list",
        title: "List",
        navLink: "user/list",
      },
    ],
  },
  {
    id: "secondPage",
    title: "Second Page",
    icon: <Mail size={20} />,
    navLink: "/second-page",
  },
];
