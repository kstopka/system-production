import Axios from "axios";

class ClassApi {
  baseUrl = "http://localhost:3002/api";
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
}

const Api = new ClassApi();

export default Api;
