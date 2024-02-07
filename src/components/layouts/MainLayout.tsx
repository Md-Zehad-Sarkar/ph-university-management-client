import { Layout, Menu, MenuProps } from "antd";
import { NavLink, Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
  // { key: "0", label: "Home" },
  {
    key: "Dashboard",
    label: <NavLink to="/admin/dashboard">Dashboard</NavLink>,
  },

  {
    key: "User Management",

    label: "User Management",
    children: [
      {
        key: "Create Admin",
        label: <NavLink to="/admin/create-admin">Create Admin</NavLink>,
      },
      {
        key: "Create Faculty",
        label: <NavLink to="/admin/create-faculty">Create Faculty</NavLink>,
      },
      {
        key: "Create Student",
        label: <NavLink to="/admin/create-student">Create Student</NavLink>,
      },
    ],
  },
];

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <h1> PH-UM</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {/* content area. main content should be render ere */}
            <h1>here all content implement </h1>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ph University Management ©{new Date().getFullYear()} Created by
          Zehad_Sarkar&ph_team
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
