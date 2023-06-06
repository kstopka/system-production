import Axios from "axios";

class ClassApi {
  baseUrl = "http://localhost:3002/api";
  getMaterials() {
    return Axios.get(`${this.baseUrl}/get_material`);
  }
  addMaterial({
    nameMaterial,
    priceMaterial,
    unitMaterial,
  }: {
    nameMaterial: string;
    priceMaterial: string;
    unitMaterial: string;
  }) {
    return Axios.post(`${this.baseUrl}/add_material`, {
      nameMaterial,
      priceMaterial: Number(priceMaterial),
      unitMaterial,
    });
  }
  getParts() {
    return Axios.get(`${this.baseUrl}/get_parts`);
  }
  addPart({
    nameParts,
    materialParts,
    quintityMagazinParts,
    quantityOrderParts,
    quantityOccupiedParts,
  }: {
    nameParts: string;
    materialParts: number;
    quintityMagazinParts: number;
    quantityOrderParts: number;
    quantityOccupiedParts: number;
  }) {
    return Axios.post(`${this.baseUrl}/add_parts`, {
      nameParts,
      materialParts,
      quintityMagazinParts,
      quantityOrderParts,
      quantityOccupiedParts,
    });
  }

  delPart(idPart: number) {
    return Axios.delete(`${this.baseUrl}/del_parts/${idPart}`);
  }

  updatePart({
    idParts,
    nameParts,
    materialParts,
    quintityMagazinParts,
    quantityOrderParts,
    quantityOccupiedParts,
  }: {
    idParts: number;
    nameParts: string;
    materialParts: number;
    quintityMagazinParts: number;
    quantityOrderParts: number;
    quantityOccupiedParts: number;
  }) {
    return Axios.post(`${this.baseUrl}/update_part/${idParts}`, {
      nameParts,
      materialParts,
      quintityMagazinParts,
      quantityOrderParts,
      quantityOccupiedParts,
    });
  }
}

const Api = new ClassApi();

export default Api;
