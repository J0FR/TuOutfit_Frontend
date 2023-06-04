import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { UsuarioDetail } from '../usuario/usuario-detail';
import { Observable } from 'rxjs/internal/Observable';
import { OutfitDetail } from '../outfit/outfitDetail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  outfits: Array<OutfitDetail> = [];
  public usuario: UsuarioDetail | undefined;
  p:number = 1;
  private idUsuario = localStorage.getItem('idUsuario');
  private idUsuarioNumber = Number(this.idUsuario);

  constructor(private usuarioService: UsuarioService, private router: Router) {

  }

  ngOnInit() {
    this.getOutfits();
  }

  onSelected(outfit: OutfitDetail): void {
    this.router.navigate(['/Outfits', outfit.id]);
  }

  getOutfits(): void {
    this.usuarioService.getOutfitsUsuario(this.idUsuarioNumber).subscribe(
      outfits => {
        this.outfits = outfits;
        console.log(this.outfits.length);
      },
      error => {
        console.error('There was an error!', error);
      }

    );
  }
}
