import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GeneralService } from 'src/app/pages/general.service';
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

  constructor( private generalService: GeneralService) {
  }

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
    this.limpiarInputs();
  }

  agregarCalificacion(event: string): void {
    this.calificacionComic = Number(event);
  }

  limpiarInputs(): void {
    this.descripcionComentario = null;
    this.calificacionComic = 0;
    this.generalService.$reiniciarnputs.emit(true);
  }

}
