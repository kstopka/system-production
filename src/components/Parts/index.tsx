import { useMemo } from "react";
import { useContextState, AppCtx } from "../../contexted";
import { IAppState } from "../../contexted/App/types";
import Table from "../atoms/Table";
import { defaultColumns } from "./utils";

const Parts = (): JSX.Element => {
  const { database } = useContextState<IAppState>(AppCtx, ["database"]);
  const columns = useMemo(
    () => defaultColumns(database.materials),
    [database.parts]
  );

  return database.parts && database.parts.length > 0 ? (
    <Table columns={columns} data={database.parts} />
  ) : (
    <div>
      <h2>Brak części</h2>
    </div>
  );
};

export default Parts;
