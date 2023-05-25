import URL_PATHS, { URLSinglePath } from "../../../constants/routes";
import "./styles.css";
import { objectToArray } from "./utils";
import { NavLink } from "react-router-dom";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = (): JSX.Element => {
  const URL_PATHS_ARRAY: URLSinglePath[] = objectToArray(URL_PATHS);

  return (
    <header className="Header">
      <nav className="Navigation">
        {URL_PATHS_ARRAY && URL_PATHS_ARRAY.length > 0
          ? URL_PATHS_ARRAY.map(({ slug, label }) => (
              <NavLink
                to={slug}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                key={slug}
              >
                {label}
              </NavLink>
            ))
          : null}
      </nav>
    </header>
  );
};

export default Header;
