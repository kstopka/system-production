import { useState } from "react";
import { AppCtx, useActions } from "../../contexted";
import { IAppActions, IMaterial, IPart } from "../../contexted/App/types";
import Api from "../../fakeAPI/API";
import { defaultValues } from "./utils";

export const useDefaultColumns = (materials: IMaterial[]) => {
  const { reload } = useActions<IAppActions>(AppCtx, "reload");
  const [isUpadte, setIsUpadte] = useState(false);
  const [singlePart, setSinglePart] = useState<IPart>(defaultValues);

  const handleUpdateClick = (orginal: IPart) => {
    setIsUpadte(true);
    console.log(orginal);
    setSinglePart(orginal);

    // Api.delPart(e.row.original.idParts);
    // reload(true);
  };

  return {
    isUpadte,
    singlePart,
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
          >
            Edytuj
          </button>
        ),
      },
    ],
  };
};