import * as yup from "yup";
import { YUP } from "../../constants";

export const defaultValues = {
  nameMaterial: "",
  priceMaterial: "",
  unitMaterial: "",
};

export const schema = yup.object().shape({
  nameMaterial: YUP.nameSchemeValidation,
  priceMaterial: YUP.doubleTypeValidation,
  // unitMaterial: YUP.nameSchemeValidation,
});

export const unitsMaterial = [
  { name: "Metry", code: "m" },
  { name: "Litry", code: "l" },
  { name: "Centymetry", code: "cm" },
];
