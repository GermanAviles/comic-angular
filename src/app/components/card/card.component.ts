import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comentario } from '../../models/comentario';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() srcImage = '';
  @Input() titulo = '';
  @Input() descripcion = '';
  @Output() refreshComic = new EventEmitter<any>();
  @Output() crearComentario = new EventEmitter<Comentario>();

  descripcionComentario = '';
  calificacionComic = 0;

  constructor() { }

  ngOnInit(): void {
  }

  refrescar(): void {
    this.refreshComic.emit(true);
  }

  agregarComentario(): void {
    const comentario: Comentario = {
      titulo: this.titulo,
      descripcion: this.descripcionComentario,
      calificacion: this.calificacionComic
    };
    this.crearComentario.emit(comentario);
  }

  agregarCalificacion(event: string): void {
    this.calificacionComic = Number(event);
  }

}
