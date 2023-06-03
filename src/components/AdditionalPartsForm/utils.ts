import * as yup from "yup";
import { YUP } from "../../constants";

export const defaultValues = {
  nameParts: "",
  materialParts: 0,
  quintityMagazinParts: 0,
};

export const schema = yup.object().shape({
  nameParts: YUP.nameSchemeValidation,
});
