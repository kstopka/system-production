import AdditionalMaterialForm from "./../components/AdditionalMaterialForm";
import AdditionalPartsForm from "./../components/AdditionalPartsForm";
import Layout from "../components/Layout";

interface HomeProps {}

const HomePage: React.FC<HomeProps> = () => {
  return (
    <Layout seo={{}}>
      <div className="App">
        <AdditionalMaterialForm />
        <AdditionalPartsForm />
      </div>
    </Layout>
  );
};

export default HomePage;
