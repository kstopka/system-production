import { useNavigate } from "react-router-dom";
import URL_PATHS from "../../../constants/routes";
import { AuthCtx, useActions, useContextState } from "../../../contexted";
import { IAuthActions, IAuthState } from "../../../contexted/Auth/types";
import "./styles.css";

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = (): JSX.Element => {
  const { level, loggedIn, first_name } = useContextState<IAuthState>(AuthCtx, [
    "level",
    "loggedIn",
    "first_name",
  ]);
  const { logOut } = useActions<IAuthActions>(AuthCtx, ["logOut"]);
  const navigate = useNavigate();
  return (
    <div className="Footer">
      {loggedIn && (
        <div>
          Zalogowano jako: <span className="Name">{first_name}</span>
        </div>
      )}
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
    </div>
  );
};

export default Footer;
