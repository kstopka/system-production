import { createBrowserRouter } from "react-router-dom";
import { ContactPage, HomePage } from "../templates";
import LoginPage from "../templates/Auth/login";
import PanelAdmin from "../templates/panel_admin";

export interface URLSinglePath {
  label: string;
  slug: string;
  level: number;
}

export interface URLPaths {
  [key: string]: URLSinglePath;
}

const URL_PATHS: URLPaths = {
  home: {
    label: "Home",
    slug: "/",
    level: 1,
  },
  // contact: {
  //   label: "Contact",
  //   slug: "/contact/",
  //   level: 2,
  // },
  login: {
    label: "Login",
    slug: "/login/",
    level: 0,
  },
  admin: {
    label: "Panel Admin",
    slug: "/panel_admin/",
    level: 5,
  },
  // registiation: {
  //   label: "Registiation",
  //   slug: "/registiation/",
  // },
  // resetPassword: {
  //   label: "Reset Password",
  //   slug: "/reset-password/",
  // },
};

export const router = createBrowserRouter([
  {
    path: URL_PATHS.home.slug,
    element: <HomePage />,
  },
  // {
  //   path: URL_PATHS.contact.slug,
  //   element: <ContactPage />,
  // },
  {
    path: URL_PATHS.login.slug,
    element: <LoginPage />,
  },
  {
    path: URL_PATHS.admin.slug,
    element: <PanelAdmin />,
  },
]);

export default URL_PATHS;
