import { Prenda } from '../prenda'
import { Outfit } from '../../outfit/outfit';
import { Marca } from '../../marca/marca';
import { Comentario } from 'src/app/comentario/comentario';


export class PrendaDetail extends Prenda{

    outfits: Array<Outfit> = [];
    comentarios: Array<Comentario> = [];

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
                   outfits: Array<Outfit>,
                   comentarios: Array<Comentario>) {
        super(id, nombre, imagen, colores, genero, precio, ocasiones, rango_edad, talla, marca)
        this.outfits = outfits;
        this.comentarios = comentarios;

    }
}
