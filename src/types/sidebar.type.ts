import { ReactNode } from "react";

export type TAdminRoutes = {
  name?: string;
  path: string;
  element: ReactNode;
};

export type TSidebarPath = {
  key: string;
  label: ReactNode;
  children?: TSidebarPath[];
};

export type TUserPath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
};
