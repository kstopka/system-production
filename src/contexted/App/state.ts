import { IAppState } from "./types";

const initialState: IAppState = {
  imBusy: true,
  isModalOpen: false,
  database: {
    materials: [],
  },
};

export default initialState;

// const database = {
//   materials: [
//     {
//       idMaterial: 0,
//       nameMaterial: "Metry",
//       priceMaterial: 21,
//       unitMaterial: "m",
//     },
//     {
//       idMaterial: 1,
//       nameMaterial: "Litry",
//       priceMaterial: 21,
//       unitMaterial: "l",
//     },
//     {
//       idMaterial: 2,
//       nameMaterial: "Metry",
//       priceMaterial: 21,
//       unitMaterial: "cm",
//     },
//   ],
//   unitsMaterial: [
//     { name: "Metry", code: "m" },
//     { name: "Litry", code: "l" },
//     { name: "Centymetry", code: "cm" },
//   ],
// };
