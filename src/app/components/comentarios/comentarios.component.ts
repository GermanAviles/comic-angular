import { Component, OnInit, Input } from '@angular/core';
import { Comentario } from '../../models/comentario';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {

  @Input() comentarios: Comentario[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
