export class Marca {
  id: number;
  nombre: string;
  url_sitio_web: string;
  logo: string;
  detalle_marca: string;

  constructor(id: number, nombre: string, url_sitio_web: string, logo: string, detalle_marca: string) {
    this.id = id;
    this.nombre = nombre;
    this.url_sitio_web = url_sitio_web;
    this.logo = logo;
    this.detalle_marca = detalle_marca;
  }


}
