import Layout from "../components/Layout";

interface PanelAdminProps {}

const PanelAdmin: React.FC<PanelAdminProps> = () => {
  return (
    <Layout seo={{}}>
      <div className="PanelAdmin">
        <h1>PanelAdmin</h1>
      </div>
    </Layout>
  );
};

export default PanelAdmin;
