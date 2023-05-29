import { Component, Input ,OnInit } from '@angular/core';
import { Prenda } from '../prenda';
import { PrendaDetail } from './PrendaDetail';
import { PrendaService } from '../Prenda.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prenda-detail',
  templateUrl: './prenda-detail.component.html',
  styleUrls: ['./prenda-detail.component.css']
})
export class PrendaDetailComponent implements OnInit {

  @Input() prendaDetail!: PrendaDetail;

  constructor(private route: ActivatedRoute, private prendaService: PrendaService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.prendaService.getPrendaById(+id).subscribe((prendaDetail) => {
        this.prendaDetail = prendaDetail;
      });
    }
  }
}
