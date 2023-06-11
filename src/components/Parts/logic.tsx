import { useState } from "react";
import { AppCtx, AuthCtx, useActions, useContextState } from "../../contexted";
import { IAppActions, IMaterial, IPart } from "../../contexted/App/types";
import { IAuthState } from "../../contexted/Auth/types";
import Api from "../../fakeAPI/API";
import { defaultValues } from "./utils";

export const useDefaultColumns = (materials: IMaterial[]) => {
  const { reload } = useActions<IAppActions>(AppCtx, "reload");
  const { level } = useContextState<IAuthState>(AuthCtx, ["level"]);
  const [isUpadte, setIsUpadte] = useState(false);
  const [isAddPart, setIsAddPart] = useState(false);
  const [isAddMaterial, setIsAddMaterial] = useState(false);
  const [singlePart, setSinglePart] = useState<IPart>(defaultValues);

  const resetState = () => {
    setIsAddPart(false);
    setIsUpadte(false);
    setIsAddMaterial(false);
  };

  const handleAddPart = () => {
    resetState();
    setIsAddPart(true);
  };

  const handleAddMaterial = () => {
    resetState();
    setIsAddMaterial(true);
  };

  const handleUpdateClick = (orginal: IPart) => {
    resetState();
    setIsUpadte(true);
    console.log(orginal);
    setSinglePart(orginal);

    // Api.delPart(e.row.original.idParts);
    // reload(true);
  };

  return {
    isUpadte,
    singlePart,
    isAddPart,
    isAddMaterial,
    handleAddPart,
    handleAddMaterial,
    columns: [
      {
        Header: () => {
          return <div className="TableHeader">Nazwa</div>;
        },
        id: "nameParts",
        accessor: "nameParts",
        name: "Nazwa",
        Cell: (e: { value: string }) => `${e.value}`,
      },
      {
        Header: "Materiał",
        accessor: "materialParts",
        name: "material",
        Cell: (e: { value: string }) =>
          materials.find(({ idMaterial }) => idMaterial === Number(e.value))
            ?.nameMaterial,
      },
      {
        Header: "Magazyn",
        accessor: "quintityMagazinParts",
        name: "quintityMagazinParts",
        Cell: (e: { value: string }) => `${e.value}`,
      },
      {
        Header: "Zamówienia",
        accessor: "quantityOrderParts",
        name: "quantityOrderParts",
        Cell: (e: { value: string }) => `${e.value}`,
      },
      {
        Header: "Zajęte",
        accessor: "quantityOccupiedParts",
        name: "quantityOccupiedParts",
        Cell: (e: { value: string }) => `${e.value}`,
      },
      {
        id: "deletePart",
        Cell: (e: { row: { original: { idParts: number } } }) => (
          <button
            className="primaryBtn"
            style={{ width: `100px` }}
            onClick={() => {
              Api.delPart(e.row.original.idParts);
              reload(true);
            }}
            disabled={level < 2}
          >
            Usuń
          </button>
        ),
      },

      {
        id: "updatePart",
        Cell: (e: { row: { original: IPart } }) => (
          <button
            className="primaryBtn"
            style={{ width: `100px` }}
            onClick={() => {
              handleUpdateClick(e.row.original);
            }}
            disabled={level < 2}
          >
            Edytuj
          </button>
        ),
      },
    ],
  };
};
