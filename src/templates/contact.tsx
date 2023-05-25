import { useNavigate } from "react-router-dom";
import URL_PATHS from "../constants/routes";

interface ContactProps {}

const ContactPage: React.FC<ContactProps> = () => {
  const navigate = useNavigate();
  return (
    <div className="Contact">
      <h1>Contact</h1>
      <button onClick={() => navigate(URL_PATHS.home)} className={`primaryBtn`}>
        HOME
      </button>
    </div>
  );
};

export default ContactPage;
