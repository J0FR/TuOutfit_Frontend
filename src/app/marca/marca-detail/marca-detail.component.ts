import { Component,Input, OnInit } from '@angular/core';
import { Marca } from '../marca';
import { MarcaDetail } from '../marcaDetail';
import { ActivatedRoute } from '@angular/router';
import { OutfitService } from 'src/app/outfit/outfit.service';
import { MarcaService } from '../marca.service';


@Component({
  selector: 'app-marca-detail',
  templateUrl: './marca-detail.component.html',
  styleUrls: ['./marca-detail.component.css']
})
export class MarcaDetailComponent implements OnInit {

  @Input() marcaDetail!: MarcaDetail;

  constructor(private route: ActivatedRoute, private marcaService: MarcaService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.marcaService.getMarcasById(+id).subscribe((marcaDetail) => {
        this.marcaDetail = marcaDetail;
      });
    }
  }

}
