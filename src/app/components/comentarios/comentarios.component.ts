import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {

  @Input() comentarios = [];

  constructor() { }

  ngOnInit(): void {
  }

}
