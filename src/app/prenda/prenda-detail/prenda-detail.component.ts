import { Component, Input ,OnInit } from '@angular/core';
import { Prenda } from '../prenda';
import { PrendaDetail } from './PrendaDetail';
import { PrendaService } from '../Prenda.service';
import { ActivatedRoute } from '@angular/router';
import { OutfitService } from 'src/app/outfit/outfit.service';
import { OutfitDetail } from 'src/app/outfit/outfitDetail';

@Component({
  selector: 'app-prenda-detail',
  templateUrl: './prenda-detail.component.html',
  styleUrls: ['./prenda-detail.component.css']
})
export class PrendaDetailComponent implements OnInit {

  @Input() prendaDetail!: PrendaDetail;

  outfits: OutfitDetail[] = [];

  constructor(private route: ActivatedRoute, private prendaService: PrendaService, private outfitService: OutfitService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.prendaService.getPrendaById(+id).subscribe((prendaDetail) => {
        this.prendaDetail = prendaDetail;
      });
      this.outfitService.getOutfits().subscribe((outfitss: OutfitDetail[]) => {
        for (let i = 0; i < outfitss.length; i++) {
          for (let j = 0; j < outfitss[i].prendas.length; j++) {
            if (outfitss[i].prendas[j].id == +id) {
              this.outfits.push(outfitss[i]);
            }
          }
        }
      });
    }
  }
}
