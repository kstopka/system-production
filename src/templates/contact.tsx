import Layout from "../components/Layout";

interface ContactProps {}

const ContactPage: React.FC<ContactProps> = () => {
  return (
    <Layout seo={{}}>
      <div className="Contact">
        <h1>Contact</h1>
      </div>
    </Layout>
  );
};

export default ContactPage;
