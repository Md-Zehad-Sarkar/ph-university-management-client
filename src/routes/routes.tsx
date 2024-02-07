import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import About from "../pages/About";
import { adminRoutes } from "./admin.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <App />,
    children: adminRoutes,
  },
  {
    path: "/admin/create-admin",
    element: <App />,
    children: adminRoutes,
  },
  {
    path: "/admin/create-faculty",
    element: <App />,
    children: adminRoutes,
  },
  {
    path: "/admin/create-student",
    element: <App />,
    children: adminRoutes,
  },

  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);
export default router;
