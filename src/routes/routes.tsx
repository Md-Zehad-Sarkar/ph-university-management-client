import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { adminPath } from "./admin.routes";
import { routesGenerator } from "../utils/routesGenerator";
import { studentPaths } from "./student.route";
import { facultyPaths } from "./faculty.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: routesGenerator(adminPath),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routesGenerator(facultyPaths),
  },
  {
    path: "/student",
    element: <App />,
    children: routesGenerator(studentPaths),
  },
  {
    path: "/admin/create-student",
    element: <App />,
    children: routesGenerator(adminPath),
  },

  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);
export default router;
