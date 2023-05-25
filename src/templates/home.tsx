import AdditionalMaterialForm from "./../components/AdditionalMaterialForm";
import AdditionalPartsForm from "./../components/AdditionalPartsForm";
import { useNavigate } from "react-router-dom";
import URL_PATHS from "../constants/routes";

interface HomeProps {}

const HomePage: React.FC<HomeProps> = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <AdditionalMaterialForm />
      <AdditionalPartsForm />
      <button
        onClick={() => navigate(URL_PATHS.contact)}
        className={`primaryBtn`}
      >
        CONTACT
      </button>
    </div>
  );
};

export default HomePage;
