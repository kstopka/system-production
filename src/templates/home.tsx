import AdditionalMaterialForm from "./../components/AdditionalMaterialForm";
import AdditionalPartsForm from "./../components/AdditionalPartsForm";
import Layout from "../components/Layout";
import { AuthCtx, useContextState } from "../contexted";
import { IAuthState } from "../contexted/Auth/types";
import Hero from "../components/Hero";

interface HomeProps {}

const HomePage: React.FC<HomeProps> = () => {
  const { level } = useContextState<IAuthState>(AuthCtx, ["level"]);
  return (
    <Layout seo={{}}>
      <div className="App">
        <Hero />
        {/* <AdditionalMaterialForm /> */}
        {/* {level > 1 && <AdditionalPartsForm />} */}
      </div>
    </Layout>
  );
};

export default HomePage;
