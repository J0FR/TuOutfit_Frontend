import { Tiendafisica } from '../tiendafisica';
import { Marca } from '../../marca/marca';
import { Ubicacion } from '../../ubicacion/ubicacion';

export class TiendafisicaDetail extends Tiendafisica{

  constructor(
    id: number,
    nombre: string,
    horarios: string,
    ubicacion: Ubicacion,
    marca: Marca)
  {
    super(id, nombre, horarios, ubicacion, marca);
  }

}
