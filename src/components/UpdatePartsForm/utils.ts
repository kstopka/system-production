import * as yup from "yup";
import { YUP } from "../../constants";

import { IPart } from "../../contexted/App/types";

export const defaultValues: IPart = {
  idParts: 0,
  nameParts: "",
  materialParts: 0,
  quintityMagazinParts: 0,
  quantityOrderParts: 0,
  quantityOccupiedParts: 0,
};

export const schema = yup.object().shape({
  nameParts: YUP.nameSchemeValidation,
  quintityMagazinParts: YUP.doubleTypeValidation,
  quantityOrderParts: YUP.doubleTypeValidation,
  quantityOccupiedParts: YUP.doubleTypeValidation,
});
