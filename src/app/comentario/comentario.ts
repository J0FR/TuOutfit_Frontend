import { Usuario } from '../usuario/usuario';
import { Outfit } from '../outfit/outfit';
import { Prenda } from '../prenda/prenda';

export class Comentario {
  id: number;
  titulo: string;
  calificacion: number;
  mensaje: string;

  constructor (
    id: number,
    titulo: string,
    calificacion: number,
    mensaje: string
  ) {
    this.id = id;
    this.titulo = titulo;
    this.calificacion = calificacion;
    this.mensaje = mensaje;
  }

}
