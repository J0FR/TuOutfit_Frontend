export class Marca {
  id: number;
  nombre: string;
  url_sitio_web: string;
  logo: string;
  detalle_marca: string;
  //prendas: prenda[];
  //tiendas_fisicas: tienda_fisica[];

  constructor(id: number, nombre: string, url_sitio_web: string, logo: string, detalle_marca: string/*, prendas: prenda[], tienda_fisicas: tienda_fisica[]*/) {
    this.id = id;
    this.nombre = nombre;
    this.url_sitio_web = url_sitio_web;
    this.logo = logo;
    this.detalle_marca = detalle_marca;
    //this.prendas = prendas;
    //tiendas_fisicas = tiendas_fisicas;
  }


}
