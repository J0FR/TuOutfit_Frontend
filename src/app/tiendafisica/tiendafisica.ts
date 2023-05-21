import { Marca } from '../marca/marca';
import { Ubicacion } from '../ubicacion/ubicacion';


export class Tiendafisica {
  id: number;
  nombre: string;
  horarios: string;
  ubicacion: Ubicacion;
  marca: Marca;


  constructor(
    id: number,
    nombre: string,
    horarios: string,
    ubicacion: Ubicacion,
    marca: Marca
  ) {
    this.id = id;
    this.nombre = nombre;
    this.horarios = horarios;
    this.ubicacion = ubicacion;
    this.marca = marca;
 }
}
/* archivo src/app/book/book.ts */
