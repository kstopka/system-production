import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import URL_PATHS from "../../constants/routes";
import { AuthCtx, useActions, useContextState } from "../../contexted";
import { IAuthActions, IAuthState } from "../../contexted/Auth/types";
import Footer from "./Footer";
import Head from "./Head";
import Header from "./Header";
import "./styles.css";

interface ILayout {
  children: React.ReactNode;
  seo: Record<string, any>;
}

const Layout: React.FC<ILayout> = ({ children, seo }): JSX.Element => {
  const location = useLocation();
  const { level } = useContextState<IAuthState>(AuthCtx, ["level"]);
  const { logOut } = useActions<IAuthActions>(AuthCtx, ["logOut"]);

  const navigate = useNavigate();

  const escapeLogOut = ({ key }: KeyboardEvent) => {
    if (key === "Escape") logOut();
  };

  useEffect(() => {
    window.addEventListener("keydown", escapeLogOut);

    return () => {
      window.removeEventListener("keydown", escapeLogOut);
    };
  }, []);

  if (level === 0 && location.pathname !== "/login/") {
    navigate(URL_PATHS.login.slug);
  }

  return (
    <div className="Layout">
      <Head seo={seo} location={location} />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
