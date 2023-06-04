import { Component, Input ,OnInit } from '@angular/core';
import { Prenda } from '../prenda';
import { PrendaDetail } from './PrendaDetail';
import { PrendaService } from '../Prenda.service';
import { ActivatedRoute } from '@angular/router';
import { Outfit } from 'src/app/outfit/outfit';
import { OutfitService } from 'src/app/outfit/outfit.service';

@Component({
  selector: 'app-prenda-detail',
  templateUrl: './prenda-detail.component.html',
  styleUrls: ['./prenda-detail.component.css']
})
export class PrendaDetailComponent implements OnInit {

  @Input() prendaDetail!: PrendaDetail;

  outfits: Outfit[] = [];

  constructor(private route: ActivatedRoute, private prendaService: PrendaService, private outfitService: OutfitService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.prendaService.getPrendaById(+id).subscribe((prendaDetail) => {
        this.prendaDetail = prendaDetail;
      });
      this.outfitService.getOutfits().subscribe((outfits: Outfit[]) => {
        for (let i = 0; i < outfits.length; i++) {
          if (+id in outfits[i].prendas) {
            this.outfits.push(outfits[i]);
          }
        }
      }
    }
  }
}
