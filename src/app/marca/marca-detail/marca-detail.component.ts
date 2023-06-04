import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Marca } from '../marca';
import { MarcaDetail } from '../marcaDetail';
import { ActivatedRoute } from '@angular/router';
import { OutfitService } from 'src/app/outfit/outfit.service';
import { MarcaService } from '../marca.service';
import { TiendafisicaService } from 'src/app/tiendafisica/tiendafisica.service';
import { Tiendafisica } from 'src/app/tiendafisica/tiendafisica';

@Component({
  selector: 'app-marca-detail',
  templateUrl: './marca-detail.component.html',
  styleUrls: ['./marca-detail.component.css']
})
export class MarcaDetailComponent implements OnInit {
  @Input() marcaDetail!: MarcaDetail;

  tiendas: Tiendafisica[] = [];
  selectedTienda!: Tiendafisica;
  latitud!: number;
  longitud!: number;
  linkmap!: string;

  constructor(
    private route: ActivatedRoute,
    private marcaService: MarcaService,
    private tiendaFisicaService: TiendafisicaService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.marcaService.getMarcasById(+id).subscribe((marcaDetail) => {
        this.marcaDetail = marcaDetail;
      });
      this.tiendaFisicaService
        .getTiendasFisicas()
        .subscribe((tiendas: Tiendafisica[]) => {
          for (let i = 0; i < tiendas.length; i++) {
            if (tiendas[i].marca.id == +id) {
              this.tiendas.push(tiendas[i]);
            }
          }
        });
    }
  }

  selectTienda(tiendafisica: Tiendafisica) {
    this.selectedTienda = tiendafisica;
    this.latitud = tiendafisica.ubicacion.latitud;
    this.longitud = tiendafisica.ubicacion.longitud;
    this.linkmap =
      'https://maps.google.com/maps?q=' +
      this.latitud +
      ',' +
      this.longitud +
      '&z=2&output=embed';
    setTimeout(() => {
      const iframe = this.mapaIframe.nativeElement;
      iframe.src = this.linkmap;
    }, 0);
  }

  @ViewChild('mapaIframe', { static: false }) mapaIframe!: ElementRef;
}
