import { Prenda } from '../prenda'
import { Outfit } from '../../outfit/outfit';
import { Marca } from '../../marca/marca';


export class PrendaDetail extends Prenda{

    outfits: Array<Outfit> = [];

    constructor(id: number,
                nombre: string,
                imagen: string,
                 colores: string,
                 genero: string,
                 precio: number,
                  ocasiones: string,
                   rango_edad: string,
                   talla: string,
                   marca: Marca,
                   outfits: Array<Outfit>) {
        super(id, nombre, imagen, colores, genero, precio, ocasiones, rango_edad, talla, marca)
        this.outfits = outfits;

    }
}
