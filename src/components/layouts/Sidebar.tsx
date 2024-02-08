import { Layout, Menu } from "antd";
import { sidebarGenerator } from "../../utils/sidebarGenerator";
import { adminPath } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.route";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sidebar = () => {
  const role = "admin";
  // const role = "faculty";
  // const role = "student";
  let sidebarItem;
  switch (role) {
    case userRole.ADMIN:
      sidebarItem = sidebarGenerator(adminPath, userRole.ADMIN);

      break;
    case userRole.FACULTY:
      sidebarItem = sidebarGenerator(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sidebarItem = sidebarGenerator(studentPaths, userRole.STUDENT);
      break;
    default:
      break;
  }
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <h1>PH-UM</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        // items={items}
        items={sidebarItem}
      />
    </Sider>
  );
};

export default Sidebar;
