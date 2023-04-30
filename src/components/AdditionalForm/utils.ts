import * as yup from "yup";
import { YUP } from "../../constants";

export const defaultValues = {
  nameMaterial: "",
  priceMaterial: 100,
};

export const schema = yup.object().shape({
  nameMaterial: YUP.nameSchemeValidation,
  priceMaterial: YUP.doubleTypeValidation,
});
