import URL_PATHS, { URLSinglePath } from "../../../constants/routes";
import "./styles.css";
import { objectToArray } from "./utils";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthCtx, useActions, useContextState } from "../../../contexted";
import { IAuthActions, IAuthState } from "../../../contexted/Auth/types";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = (): JSX.Element => {
  const URL_PATHS_ARRAY: URLSinglePath[] = objectToArray(URL_PATHS);
  const { level, loggedIn, first_name } = useContextState<IAuthState>(AuthCtx, [
    "level",
    "loggedIn",
    "first_name",
  ]);
  const { logOut } = useActions<IAuthActions>(AuthCtx, ["logOut"]);
  const navigate = useNavigate();

  return (
    <header className="Header">
      <nav className="Navigation">
        {URL_PATHS_ARRAY && URL_PATHS_ARRAY.length > 0
          ? URL_PATHS_ARRAY.map(({ slug, label, level: urlLevel }) =>
              urlLevel === level || (urlLevel < level && label !== "Login") ? (
                <NavLink
                  to={slug}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  key={slug}
                >
                  {label}
                </NavLink>
              ) : null
            )
          : null}
        {level > 0 ? (
          <button
            className={`primaryBtn`}
            onClick={() => {
              logOut();
              navigate(URL_PATHS.login.slug);
            }}
          >
            Logout
          </button>
        ) : null}
      </nav>
      {loggedIn && <div className="Name">{first_name}</div>}
    </header>
  );
};

export default Header;
