import { Marca } from "./marca";
import { Prenda } from "../prenda/prenda";

export class MarcaDetail extends Marca{
  prendas:  Array<Prenda> = [];
  //tiendasFisicas: Array<TiendaFisica> = [];

  constructor(
    id: number,
    nombre: string,
    url_sitio_web: string,
    logo: string,
    detalle_marca: string,
    prendas: Array<Prenda>
    //tiendasFisicas: Array<TiendaFisica>
  ){
    super(id, nombre, url_sitio_web, logo, detalle_marca)
   this.prendas = prendas;
  }
}
