import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { UsuarioDetail } from '../usuario/usuario-detail';
import { Observable } from 'rxjs/internal/Observable';
import { OutfitDetail } from '../outfit/outfitDetail';
import { Router } from '@angular/router';
import { OutfitService } from '../outfit/outfit.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  outfits: Array<OutfitDetail> = [];
  public usuario: UsuarioDetail | undefined;
  p:number = 1;
  showFilters = false;
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


  selectedGender = 'Genero';
	onSelectedFilterGender(value:string): void {
		this.selectedGender = value;
	}

  selectedAge = 'Edad';
	onSelectedFilterAge(value:string): void {
		this.selectedAge = value;
	}

  selectedOccasion = 'Ocasion';
	onSelectedFilterOcassion(value:string): void {
		this.selectedOccasion = value;
	}

  getNumberOfOutfits(): number {
    return this.outfits.length;
  }

}
