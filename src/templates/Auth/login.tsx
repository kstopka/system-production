/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import React from "react";
import Layout from "../../components/Layout";
import { useLocation, Location } from "react-router-dom";

import PrivateRoute from "./utils";
import LoginForm from "../../components/LoginForm";

interface ILoginPage {}

const LoginPage: React.FC<ILoginPage> = () => {
  const location: Location = useLocation();

  return (
    <Layout seo={{}}>
      <PrivateRoute location={location}>
        <div className="Login">
          <LoginForm />
        </div>
      </PrivateRoute>
    </Layout>
  );
};

export default LoginPage;
