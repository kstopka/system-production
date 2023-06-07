import Layout from "../components/Layout";
import Parts from "../components/Parts";
import { useContextState, AppCtx, useActions } from "../contexted";
import { IAppState, IAppActions } from "../contexted/App/types";

interface PartsPageProps {}

const PartsPage: React.FC<PartsPageProps> = () => {
  const { database } = useContextState<IAppState>(AppCtx, ["database"]);
  const { addPart } = useActions<IAppActions>(AppCtx, "addPart");
  console.log("database", database);

  return (
    <Layout seo={{}}>
      <div className="Parts">
        <Parts />
      </div>
    </Layout>
  );
};

export default PartsPage;
