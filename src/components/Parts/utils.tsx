/* eslint-disable react-hooks/rules-of-hooks */
import { AppCtx, useActions } from "../../contexted";
import { IAppActions, IMaterial } from "../../contexted/App/types";
import Api from "../../fakeAPI/API";

export const defaultColumns = (materials: IMaterial[]) => {
  const { reload } = useActions<IAppActions>(AppCtx, "reload");

  return [
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
      Header: "quantityOccupiedParts",
      accessor: "quantityOccupiedParts",
      name: "quantityOccupiedParts",
      Cell: (e: { value: string }) => `${e.value}`,
    },
    {
      Header: "quantityOrderParts",
      accessor: "quantityOrderParts",
      name: "quantityOrderParts",
      Cell: (e: { value: string }) => `${e.value}`,
    },
    {
      Header: "quintityMagazinParts",
      accessor: "quintityMagazinParts",
      name: "quintityMagazinParts",
      Cell: (e: { value: string }) => `${e.value}`,
    },
    {
      id: "singleOrder",
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
  ];
};
