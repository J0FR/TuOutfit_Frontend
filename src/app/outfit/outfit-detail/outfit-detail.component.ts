import { Component, Input, OnInit } from '@angular/core';
import { OutfitDetail } from '../outfitDetail';
import { ActivatedRoute, Router } from '@angular/router';
import { OutfitService } from '../outfit.service';
import { UsuarioService } from 'src/app/usuario/usuario.service';

@Component({
  selector: 'app-outfit-detail',
  templateUrl: './outfit-detail.component.html',
  styleUrls: ['./outfit-detail.component.css']
})
export class OutfitDetailComponent implements OnInit {

  @Input() outfitDetail!: OutfitDetail;

  private idUsuario = localStorage.getItem('idUsuario');
  private idUsuarioNumber = Number(this.idUsuario);

  constructor(private route: ActivatedRoute, private router: Router, private outfitService: OutfitService, public usuarioService: UsuarioService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.outfitService.getOutfitsById(+id).subscribe((outfitDetail) => {
        this.outfitDetail = outfitDetail;
      });
    }
  }


  getNumberOfPrendas(): number {
    return this.outfitDetail.prendas.length;
  }

  onLikeButtonClick(outfitId: number): void {
    this.usuarioService.likeOutfit(outfitId, this.idUsuarioNumber).subscribe(() => {
      alert("Se agrego el Like!" + outfitId);
    }, (error) => {
      alert("Error: no se pudo agragar el like." + outfitId);
    });
  }

  onCommentButtonClick(outfitId: number): void {
    localStorage.setItem('currentOutfitId', String(outfitId));
    this.router.navigate(['comentario-outfit']);
  }

  onCommentButtonClickNot(): void {
    this.router.navigate(['Signup']);
    alert("Necesitas una cuenta para comentar.");
  }




}
