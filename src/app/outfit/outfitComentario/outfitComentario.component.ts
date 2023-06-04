import { Component, OnInit } from '@angular/core';
import { OutfitService } from '../outfit.service';
import { Router } from '@angular/router';
import { Comentario } from 'src/app/comentario/comentario';
import { ComentarioService } from 'src/app/comentario/comentario.service';
import { NuestroComentario } from 'src/app/comentario/nuestroComentario';

@Component({
  selector: 'app-outfitComentario',
  templateUrl: './outfitComentario.component.html',
  styleUrls: ['./outfitComentario.component.css']
})
export class OutfitComentarioComponent implements OnInit {

  public titulo: string = '';
  public calificacion: number = 0;
  public mensaje: string = '';

  miComentario = new NuestroComentario(
    '', 0, ''
  );

  private idOutfit = localStorage.getItem('currentOutfitId');
  private idOutfitNum = Number(this.idOutfit);
  private idComentario = 0;

  constructor(private outfitService: OutfitService, private comentarioService: ComentarioService, private router: Router) { }

  ngOnInit() {
  }

  onFormSubmit() {
    const formData = JSON.stringify(this.miComentario);

    console.log(formData);

    this.comentarioService.createComentario(formData).subscribe((comentario) => {
        localStorage.setItem('idComentario_Form', comentario.id.toString());
        this.idComentario = Number(localStorage.getItem('idComentario_Form'));

        this.idOutfit = localStorage.getItem('currentOutfitId');
        this.idOutfitNum = Number(this.idOutfit);
        this.outfitService.postAgregarUnComentarioOutfit(this.idOutfitNum, this.idComentario).subscribe((res) => {
          console.log(`Comentario with id ${this.idComentario} added to Outfit with id ${this.idOutfitNum}`);
          this.router.navigate(['Outfits']);
          alert('Comentario agregado con exito');
          }, error => {
            console.log('Error adding comentario to outfit', error);
            alert('Error agregando comentario');
        });
      }

    );
  }
}
