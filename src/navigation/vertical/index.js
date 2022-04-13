import { Mail, Home, Users, Circle } from "react-feather";
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
    id: "region",
    title: "Region",
    icon: <Circle size={20} />,
    children: [
      {
        id: "add",
        title: "Add",
        navLink: "region/add",
      },
      {
        id: "list",
        title: "List",
        navLink: "region/list",
      },
    ],
  },
  {
    id: "Field Survey",
    title: "Field Survey",
    icon: <Circle size={20} />,
    children: [
      {
        id: "add",
        title: "Add",
        navLink: "fieldSurvey/add",
      },
      {
        id: "list",
        title: "List",
        navLink: "fieldSurvey/list",
       
      },
     
    ],
  },
  
    
  
];
