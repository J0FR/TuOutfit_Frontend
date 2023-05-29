import { Component, Input, OnInit } from '@angular/core';
import { TiendafisicaDetail } from "./TiendafisicaDetail"
import { ActivatedRoute } from '@angular/router';
import { TiendafisicaService } from '../tiendafisica.service';


@Component({
  selector: 'app-tiendafisica-detail',
  templateUrl: './tiendafisica-detail.component.html',
  styleUrls: ['./tiendafisica-detail.component.css']
})
export class TiendafisicaDetailComponent implements OnInit {

  @Input() tiendafisicaDetail!: TiendafisicaDetail;

  constructor(private route: ActivatedRoute, private tiendaFisicaService: TiendafisicaService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tiendaFisicaService.getTiendaFisicaById(+id).subscribe((tiendaFisicaDetail) => {
        this.tiendafisicaDetail = tiendaFisicaDetail;
      });
    }
  }

}
