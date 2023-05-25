import React from "react";
import { useLocation } from "react-router-dom";
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
