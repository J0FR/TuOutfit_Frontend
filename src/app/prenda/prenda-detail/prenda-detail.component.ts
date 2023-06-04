import { Component, Input ,OnInit } from '@angular/core';
import { Prenda } from '../prenda';
import { PrendaDetail } from './PrendaDetail';
import { PrendaService } from '../Prenda.service';
import { UsuarioService } from 'src/app/usuario/usuario.service';
import { OutfitService } from 'src/app/outfit/outfit.service';
import { OutfitDetail } from 'src/app/outfit/outfitDetail';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prenda-detail',
  templateUrl: './prenda-detail.component.html',
  styleUrls: ['./prenda-detail.component.css']
})
export class PrendaDetailComponent implements OnInit {

  @Input() prendaDetail!: PrendaDetail;

  constructor(private route: ActivatedRoute, private prendaService: PrendaService, private router: Router, public usuarioService: UsuarioService, private outfitService: OutfitService) { }
  outfits: OutfitDetail[] = [];

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

  onCommentButtonClick(outfitId: number): void {
    console.log(this.usuarioService.IsAuth());
    if (this.usuarioService.IsAuth()) {
      localStorage.setItem('currentPrendaId', String(outfitId));
      this.router.navigate(['comentario-prenda']);
    } else {
      this.router.navigate(['Signup']);
      alert("Necesitas una cuenta para comentar.");
    }
  }

}
