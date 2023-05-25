import { createBrowserRouter } from "react-router-dom";
import { ContactPage, HomePage } from "../templates";

export interface URLSinglePath {
  label: string;
  slug: string;
}

export interface URLPaths {
  [key: string]: URLSinglePath;
}

const URL_PATHS: URLPaths = {
  home: {
    label: "Home",
    slug: "/",
  },
  contact: {
    label: "Contact",
    slug: "/contact/",
  },
};

export const router = createBrowserRouter([
  {
    path: URL_PATHS.home.slug,
    element: <HomePage />,
  },
  {
    path: URL_PATHS.contact.slug,
    element: <ContactPage />,
  },
]);

export default URL_PATHS;
