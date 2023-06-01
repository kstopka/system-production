import Axios from "axios";

class ClassApi {
  baseUrl = "http://localhost:3002/api";
  getMaterial() {
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
}

const Api = new ClassApi();

export default Api;
