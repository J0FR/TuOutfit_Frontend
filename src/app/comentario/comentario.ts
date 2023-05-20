import { Usuario } from '../usuario/usuario';
import { Outfit } from '../outfit/outfit';
import { Prenda } from '../prenda/prenda';

export class Comentario {
  titulo: string;
  calificacion: number;
  mensaje: string;

  constructor (
    titulo: string,
    calificacion: number,
    mensaje: string
  ) {
    this.titulo = titulo;
    this.calificacion = calificacion;
    this.mensaje = mensaje;
  }

}
