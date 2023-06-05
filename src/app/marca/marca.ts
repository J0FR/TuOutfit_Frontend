export class Marca {
  id: number;
  nombre: string;
  urlSitioWeb: string;
  logo: string;
  detalleDeMarca: string;


  constructor(id: number, nombre: string, urlSitioWeb: string, logo: string, detalleDeMarca: string) {
    this.id = id;
    this.nombre = nombre;
    this.urlSitioWeb = urlSitioWeb;
    this.logo = logo;
    this.detalleDeMarca = detalleDeMarca;
  }


}
