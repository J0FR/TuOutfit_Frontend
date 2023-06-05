import { Marca } from "./marca";
import { Prenda } from "../prenda/prenda";

export class MarcaDetail extends Marca{
  prendas:  Array<Prenda> = [];
  //tiendasFisicas: Array<TiendaFisica> = [];

  constructor(
    id: number,
    nombre: string,
    urlSitioWeb: string,
    logo: string,
    detalleDeMarca: string,
    prendas: Array<Prenda>
    //tiendasFisicas: Array<TiendaFisica>
  ){
    super(id, nombre, urlSitioWeb, logo, detalleDeMarca)
   this.prendas = prendas;
  }
}
