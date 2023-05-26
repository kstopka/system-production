import { useNavigate, Location } from "react-router-dom";
import PageLoader from "../../components/atoms/PageLoader";
import URL_PATHS from "../../constants/routes";
import { AuthCtx, useContextState } from "../../contexted";
import { IAuthState } from "../../contexted/Auth/types";

interface IPrivateRoute {
  location: Location;
  children?: React.ReactNode;
}

const PrivateRoute = ({ location, children }: IPrivateRoute): JSX.Element => {
  const { loggedIn, isBusy } = useContextState<IAuthState>(AuthCtx, [
    "loggedIn",
    "isBusy",
  ]);

  const navigate = useNavigate();

  const securedPaths =
    location.pathname === `/login/` ||
    location.pathname === `/registiation/` ||
    location.pathname === `/reset-password/`;

  if (!loggedIn && !securedPaths && typeof window === "object") {
    navigate(URL_PATHS.login.slug);
    return <>{isBusy && <PageLoader size={15} />}</>;
  }

  if (
    !loggedIn &&
    location.pathname === "/account/" &&
    typeof window === "object"
  ) {
    navigate(URL_PATHS.login.slug);
    return <>{isBusy && <PageLoader size={15} />}</>;
  }

  if (loggedIn && securedPaths && typeof window === "object") {
    navigate(URL_PATHS.home.slug);
    return <>{isBusy && <PageLoader size={15} />}</>;
  }

  return !isBusy ? <>{children}</> : <PageLoader size={15} />;
};

export default PrivateRoute;
