import { Prenda } from "../prenda/prenda";
import { Outfit } from "./outfit";

export class OutfitDetail extends Outfit {
  prendas: Array<Prenda> = [];
  // comentarios: Array<Comentario> = [];

  constructor (id: number, descripcion: string, imagen: string, nombre: string, precio: number, colores: string, genero: string, ocasiones: string, rango_edad: string, talla: string, prendas: Array<Prenda>
    // , comentarios: Array<Comentario>
    ) {
    super(id, descripcion, imagen, nombre, precio, colores, genero, ocasiones, rango_edad, talla)
    this.prendas = prendas;
    // this.comentarios = comentarios;
  }
}
