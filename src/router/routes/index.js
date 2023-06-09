// ** React Imports
import { Fragment, lazy } from "react";
import { Navigate } from "react-router-dom";
// ** Layouts
import BlankLayout from "@layouts/BlankLayout";
import VerticalLayout from "@src/layouts/VerticalLayout";
import HorizontalLayout from "@src/layouts/HorizontalLayout";
import LayoutWrapper from "@src/@core/layouts/components/layout-wrapper";

// ** Route Components
import PublicRoute from "@components/routes/PublicRoute";

// ** Utils
import { isObjEmpty } from "@utils";
import Add from "../../views/User/Add";
import List from "../../views/User/List";
import AddRegion from "../../views/Region/Add";
import RegionList from "../../views/Region/List";
import AddSite from "../../views/Site/Add";
import SiteList from "../../views/Site/List";
import AddSurvey from "../../views/FieldSurevy/Add";
import FieldSurveyList from "../../views/FieldSurevy/List";
import Dashboard from "../../views/Dashoard";

const getLayout = {
  blank: <BlankLayout />,
  vertical: <VerticalLayout />,
  horizontal: <HorizontalLayout />,
};

// ** Document title
const TemplateTitle = "%s - Vuexy React Admin Template";

// ** Default Route
const DefaultRoute = "/";

const Home = lazy(() => import("../../views/Home"));
const SecondPage = lazy(() => import("../../views/SecondPage"));
const Login = lazy(() => import("../../views/Login"));
const Register = lazy(() => import("../../views/Register"));
const ForgotPassword = lazy(() => import("../../views/ForgotPassword"));
const Error = lazy(() => import("../../views/Error"));

// ** Merge Routes
const Routes = [
  // {
  //   path: "/",
  //   index: true,
  //   element: <Navigate replace to={DefaultRoute} />,
  // },
  {
    path: "/",
    element: <Dashboard />,
    permissions: ["admin"],
  },
  {
    path: "/user/add",
    element: <Add />,
    permissions: ["admin"],
  },
  {
    path: "/user/update/:id",
    element: <Add />,
    permissions: ["admin"],
  },
  {
    path: "/user/list",
    element: <List />,
    permissions: ["admin"],
  },
  {
    path: "/region/add",
    element: <AddRegion />,
    permissions: ["admin"],
  },
  {
    path: "/region/update/:id",
    element: <AddRegion />,
    permissions: ["admin"],
  },
  {
    path: "/region/list",
    element: <RegionList />,
    permissions: ["admin"],
  },
  {
    path: "/site/add",
    element: <AddSite />,
    permissions: ["admin"],
  },
  {
    path: "/site/update/:id",
    element: <AddSite />,
    permissions: ["admin"],
  },
  {
    path: "/site/list",
    element: <SiteList />,
    permissions: ["admin"],
  },
  {
    path: "/fieldSurvey/add",
    element: <AddSurvey />,
    permissions: ["admin", "inspector"],
  },
  {
    path: "/fieldSurvey/list",
    element: <FieldSurveyList />,
    permissions: ["admin"],
  },

  {
    path: "/login",
    element: <Login />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/register",
    element: <Register />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/error",
    element: <Error />,
    meta: {
      layout: "blank",
    },
  },
];

const getRouteMeta = (route) => {
  if (isObjEmpty(route.element.props)) {
    if (route.meta) {
      return { routeMeta: route.meta };
    } else {
      return {};
    }
  }
};

// ** Return Filtered Array of Routes & Paths
const MergeLayoutRoutes = (layout, defaultLayout) => {
  const LayoutRoutes = [];

  if (Routes) {
    Routes.filter((route) => {
      let isBlank = false;
      // ** Checks if Route layout or Default layout matches current layout
      if (
        (route.meta && route.meta.layout && route.meta.layout === layout) ||
        ((route.meta === undefined || route.meta.layout === undefined) &&
          defaultLayout === layout)
      ) {
        const RouteTag = PublicRoute;

        // ** Check for public or private route
        if (route.meta) {
          route.meta.layout === "blank" ? (isBlank = true) : (isBlank = false);
        }
        if (route.element) {
          const Wrapper =
            // eslint-disable-next-line multiline-ternary
            isObjEmpty(route.element.props) && isBlank === false
              ? // eslint-disable-next-line multiline-ternary
                LayoutWrapper
              : Fragment;

          route.element = (
            <Wrapper {...(isBlank === false ? getRouteMeta(route) : {})}>
              <RouteTag route={route}>{route.element}</RouteTag>
            </Wrapper>
          );
        }

        // Push route to LayoutRoutes
        LayoutRoutes.push(route);
      }
      return LayoutRoutes;
    });
  }
  return LayoutRoutes;
};

const getRoutes = (layout) => {
  const defaultLayout = layout || "vertical";
  const layouts = ["vertical", "horizontal", "blank"];

  const AllRoutes = [];

  layouts.forEach((layoutItem) => {
    const LayoutRoutes = MergeLayoutRoutes(layoutItem, defaultLayout);

    AllRoutes.push({
      path: "/",
      element: getLayout[layoutItem] || getLayout[defaultLayout],
      children: LayoutRoutes,
    });
  });
  return AllRoutes;
};

export { DefaultRoute, TemplateTitle, Routes, getRoutes };
