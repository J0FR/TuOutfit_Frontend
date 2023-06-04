import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComentarioService } from 'src/app/comentario/comentario.service';
import { OutfitService } from 'src/app/outfit/outfit.service';
import { PrendaService } from '../Prenda.service';
import { miComentario } from 'src/app/comentario/miComentario';

@Component({
  selector: 'app-prendaComentario',
  templateUrl: './prendaComentario.component.html',
  styleUrls: ['./prendaComentario.component.css']
})
export class PrendaComentarioComponent implements OnInit {

  public titulo: string = '';
  public calificacion: number = 0;
  public mensaje: string = '';

  miComentario = new miComentario(
    '', 0, ''
  );

  private idPrenda = localStorage.getItem('currentPrendaId');
  private idPrendaNum = Number(this.idPrenda);
  private idComentario = 0;

  constructor(private prendaService: PrendaService, private comentarioService: ComentarioService, private router: Router) { }

  ngOnInit() {
  }

  onFormSubmit() {
    const formData = JSON.stringify(this.miComentario);

    console.log(formData);

    this.comentarioService.createComentario(formData).subscribe((comentario) => {
        localStorage.setItem('idComentario_Form', comentario.id.toString());
        this.idComentario = Number(localStorage.getItem('idComentario_Form'));

        this.idPrenda = localStorage.getItem('currentPrendaId');
        this.idPrendaNum = Number(this.idPrenda);
        this.prendaService.postAgregarUnComentarioPrenda(this.idPrendaNum, this.idComentario).subscribe((res) => {
          console.log(`Comentario with id ${this.idComentario} added to Prenda with id ${this.idPrendaNum}`);
          this.router.navigate(['Prendas']);
          alert('Comentario agregado con exito');
          }, error => {
            console.log('Error adding comentario to prenda', error);
            alert('Error agregando comentario');
        });
      }

    );
  }
}
