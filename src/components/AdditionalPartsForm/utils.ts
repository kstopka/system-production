import * as yup from "yup";
import { YUP } from "../../constants";

export const defaultValues = {
  nameParts: "",
  materialParts: "",

  addNewMaterial: false,
  nameMaterial: "",
  priceMaterial: "",
  unitMaterial: "",
};

export const schema = yup.object().shape({
  nameParts: YUP.nameSchemeValidation,
  addNewMaterial: yup.boolean(),
  nameMaterial: yup.string().when("addNewMaterial", {
    is: (addNewMaterial: boolean) => addNewMaterial === true,
    then: () => YUP.nameSchemeValidation,
  }),
  priceMaterial: yup.string().when("addNewMaterial", {
    is: (addNewMaterial: boolean) => addNewMaterial === true,
    then: () => YUP.doubleTypeValidation,
  }),
});

export const materialsParts = [
  { name: "Tytan", code: "0" },
  { name: "Żelazo", code: "1" },
  { name: "Srebro", code: "2" },
];

export const unitsMaterial = [
  { name: "Metry", code: "m" },
  { name: "Litry", code: "l" },
  { name: "Centymetry", code: "cm" },
];
