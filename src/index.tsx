import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";

import ContextsWrapper from "./AllContextsWrapper";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ContactPage, HomePage } from "./templates";
import URL_PATHS from "./constants/routes";

export const router = createBrowserRouter([
  {
    path: URL_PATHS.home,
    element: <HomePage />,
  },
  {
    path: URL_PATHS.contact,
    element: <ContactPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ContextsWrapper element={<RouterProvider router={router} />} />
  </React.StrictMode>
);
