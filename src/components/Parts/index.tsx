import { useContextState, AppCtx } from "../../contexted";
import { IAppState } from "../../contexted/App/types";
import AdditionalMaterialForm from "../AdditionalMaterialForm";
import AdditionalPartsForm from "../AdditionalPartsForm";
import Table from "../atoms/Table";
import UpdatePartsForm from "../UpdatePartsForm";
import { useDefaultColumns } from "./logic";
import "./style.css";

const Parts = (): JSX.Element => {
  const { database } = useContextState<IAppState>(AppCtx, ["database"]);
  const {
    columns,
    isUpadte,
    singlePart,
    isAddPart,
    isAddMaterial,
    handleAddPart,
    handleAddMaterial,
  } = useDefaultColumns(database.materials);

  return database.parts && database.parts.length > 0 ? (
    <div className="WrapperParts">
      <Table
        columns={columns}
        data={database.parts}
        handleAddPart={handleAddPart}
        handleAddMaterial={handleAddMaterial}
      />
      {isUpadte && <UpdatePartsForm singlePart={singlePart} />}
      {isAddPart && <AdditionalPartsForm />}
      {isAddMaterial && <AdditionalMaterialForm />}
    </div>
  ) : (
    <div className="WrapperParts">
      <div className="WrapperNoParts">
        <h2>Brak części</h2>
        <div className="WrapperButtons">
          <button className="primaryBtn" onClick={() => handleAddPart()}>
            Dodaj Część
          </button>
          <button className="primaryBtn" onClick={() => handleAddMaterial()}>
            Dodaj Materiał
          </button>
        </div>
      </div>
      {isUpadte && <UpdatePartsForm singlePart={singlePart} />}
      {isAddPart && <AdditionalPartsForm />}
      {isAddMaterial && <AdditionalMaterialForm />}
    </div>
  );
};

export default Parts;
