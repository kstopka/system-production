import AdditionalMaterialForm from "./../components/AdditionalMaterialForm";
import AdditionalPartsForm from "./../components/AdditionalPartsForm";
import Layout from "../components/Layout";
import Api from "../fakeAPI/API";

interface HomeProps {}

const HomePage: React.FC<HomeProps> = () => {
  const handleClick = async () => {
    const response = await Api.getMaterials();
    console.log(response);
  };
  return (
    <Layout seo={{}}>
      <div className="App">
        {/* <AdditionalMaterialForm /> */}
        <AdditionalPartsForm />
      </div>
      {/* <button onClick={handleClick}>KLIK</button> */}
    </Layout>
  );
};

export default HomePage;
