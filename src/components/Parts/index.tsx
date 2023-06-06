import { useContextState, AppCtx } from "../../contexted";
import { IAppState } from "../../contexted/App/types";
import Table from "../atoms/Table";
import UpdatePartsForm from "../UpdatePartsForm";
import { useDefaultColumns } from "./logic";
import "./style.css";

const Parts = (): JSX.Element => {
  const { database } = useContextState<IAppState>(AppCtx, ["database"]);
  const { columns, isUpadte, singlePart } = useDefaultColumns(
    database.materials
  );

  return database.parts && database.parts.length > 0 ? (
    <div className="WrapperParts">
      <Table columns={columns} data={database.parts} />
      {isUpadte && <UpdatePartsForm singlePart={singlePart} />}
    </div>
  ) : (
    <div>
      <h2>Brak części</h2>
    </div>
  );
};

export default Parts;
