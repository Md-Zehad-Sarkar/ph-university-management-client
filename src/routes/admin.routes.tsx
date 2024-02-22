import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
import AcademicDepartment from "../pages/admin/academicManagement/AcademicDepartment";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import CreateAcademicDepartment from "../pages/admin/academicManagement/CreateAcademicDepartment";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
import StudentData from "../pages/admin/userManagement/StudentData";
import StudentDetails from "../pages/admin/userManagement/StudentDetails";

export const adminPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Academic Management",

    children: [
      {
        name: "Create A. Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester />,
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester />,
      },
      {
        name: "Create A. Faculty",
        path: "create-academic-faculty",
        element: <AcademicSemester />,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        // element: <CreateAcademicSemester />,
      },
      {
        name: "Create A. Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />,
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepartment />,
      },
    ],
  },

  {
    name: "User Management",
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
      {
        name: "Students",
        path: "students",
        element: <StudentData />,
      },
      {
        path: "students/:studentId",
        element: <StudentDetails />,
      },
    ],
  },
];

// //* .................... Programmatically way....................
// export const adminSidebarRoutes = adminPath.reduce(
//   (acc: TSidebarPath[], items) => {
//     if (items.path && items.name) {
//       acc.push({
//         key: items.name,
//         label: <NavLink to={`/admin/${items.path}`}>{items.name}</NavLink>,
//       });
//     }
//     if (items.children) {
//       acc.push({
//         key: items.name,
//         label: items.name,
//         children: items.children.map((child) => ({
//           key: child.name,
//           label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//         })),
//       });
//     }

//     return acc;
//   },
//   []
// );

// //* .................... Programmatically way....................
// export const adminRoutes = adminPath.reduce((acc: TAdminRoutes[], items) => {
//   if (items.path && items.element) {
//     acc.push({ path: items.path, element: items.element });
//   }
//   if (items.children) {
//     items.children.forEach((child) => {
//       acc.push({ path: child.path, element: child.element });
//     });
//   }
//   return acc;
// }, []);

//! .................... Hard Coded way....................

// export const adminRoutesPath = [
//   { path: "dashboard", element: <AdminDashboard /> },
//   { path: "create-admin", element: <CreateAdmin /> },
//   { path: "create-student", element: <CreateFaculty /> },
//   { path: "create-student", element: <CreateStudent /> },
// ];
