import { Link } from "react-router-dom";
import URL_PATHS from "../../constants/routes";
import { useContextState, AuthCtx } from "../../contexted";
import { IAuthState } from "../../contexted/Auth/types";
import heroImage from "./heroImage.png";
import "./style.css";
interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}): JSX.Element => {
  const { level } = useContextState<IAuthState>(AuthCtx, ["level"]);

  return (
    <div className="WrapperHero">
      <img src={heroImage} alt="heroImage" className="HeroImage" />
      <div className="HeroGradient"></div>
      <div className="HeroWrapperTitle">
        <h1 className="HeroTitle">System Production</h1>
      </div>
      <div className="HeroWrapperDesc">
        <p className="HeroDesc">
          Rozwój technologiczny na całym świecie swoją skalą zmusza producentów
          i firmy serwisujące do ciągłych innowacji na swoich liniach
          produkcyjnych. Wykonywana na nich praca musi być szybka i wydajna.
          Potencjał pracowniczy i produkcyjny musi być wykorzystywany w pełni,
          aby sprostać popytowi i utrzymać się na rynku z silną konkurencją.
        </p>
      </div>
      <div className="HeroWrapperLinks">
        <Link to={URL_PATHS.parts.slug} className="HeroLink">
          {URL_PATHS.parts.label}
        </Link>
        {level > 2 && (
          <Link to={URL_PATHS.admin.slug} className="HeroLink">
            {URL_PATHS.admin.label}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;
