import { Component, OnInit, Input } from '@angular/core';
import { UsuarioDetail } from '../usuario-detail';

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit {

  @Input() usuarioDetail!: UsuarioDetail;

  constructor() { }

  ngOnInit() {
  }

}
