import { Component, Input ,OnInit } from '@angular/core';
import { Prenda } from '../prenda';
import { PrendaDetail } from './PrendaDetail';
import { PrendaService } from '../Prenda.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UsuarioService } from 'src/app/usuario/usuario.service';

@Component({
  selector: 'app-prenda-detail',
  templateUrl: './prenda-detail.component.html',
  styleUrls: ['./prenda-detail.component.css']
})
export class PrendaDetailComponent implements OnInit {

  @Input() prendaDetail!: PrendaDetail;

  constructor(private route: ActivatedRoute, private prendaService: PrendaService, private router: Router, public usuarioService: UsuarioService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.prendaService.getPrendaById(+id).subscribe((prendaDetail) => {
        this.prendaDetail = prendaDetail;
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
