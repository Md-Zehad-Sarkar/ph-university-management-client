import { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

type TAdminRoutes = {
  name?: string;
  path: string;
  element: ReactNode;
};

const adminPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },

  {
    name: "User Management",
    path: "User MAnagement",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
  },
];

//* .................... Programmatically way....................
export const adminRoutes = adminPath.reduce((acc: TAdminRoutes[], items) => {
  if (items.path && items.element) {
    acc.push({ path: items.path, element: items.element });
  }
  if (items.children) {
    items.children.forEach((child) => {
      acc.push({ path: child.path, element: child.element });
    });
  }
  return acc;
}, []);

//! .................... Hard Coded way....................

// export const adminRoutesPath = [
//   { path: "dashboard", element: <AdminDashboard /> },
//   { path: "create-admin", element: <CreateAdmin /> },
//   { path: "create-student", element: <CreateFaculty /> },
//   { path: "create-student", element: <CreateStudent /> },
// ];
