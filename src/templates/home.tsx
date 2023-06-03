import AdditionalMaterialForm from "./../components/AdditionalMaterialForm";
import AdditionalPartsForm from "./../components/AdditionalPartsForm";
import Layout from "../components/Layout";
import Api from "../fakeAPI/API";
import { AuthCtx, useContextState } from "../contexted";
import { IAuthState } from "../contexted/Auth/types";

interface HomeProps {}

const HomePage: React.FC<HomeProps> = () => {
  const handleClick = async () => {
    const response = await Api.getMaterials();
    console.log(response);
  };
  const { level } = useContextState<IAuthState>(AuthCtx, ["level"]);
  return (
    <Layout seo={{}}>
      <div className="App">
        <AdditionalMaterialForm />
        {level > 1 && <AdditionalPartsForm />}
      </div>
      {/* <button onClick={handleClick}>KLIK</button> */}
    </Layout>
  );
};

export default HomePage;
