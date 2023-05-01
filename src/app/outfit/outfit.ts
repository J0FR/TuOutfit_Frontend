
export class Outfit {
  id: number;
  descripcion: string;
  imagen: string;
  nombre: string;
  precio: number;
  colores: string;
  genero: string;
  ocaciones: string;
  rango_edad: string;
  talla: string;
  // comentarios: Comentario[];
  // prendas: Prenda[];

  constructor (id: number, descripcion: string, imagen: string, nombre: string, precio: number, colores: string, genero: string, ocaciones: string, rango_edad: string, talla: string
    // , comentarios: Comentario[], prendas: Prenda[]
    ) {
    this.id = id;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.nombre = nombre;
    this.precio = precio;
    this.colores = colores;
    this.genero = genero;
    this.ocaciones = ocaciones;
    this.rango_edad = rango_edad;
    this.talla = talla;
    // this.comentarios = comentarios;
    // this.prendas = prendas;
  }
}
