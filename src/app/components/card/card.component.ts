import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  refrescar(): void {
    console.log('VAMOS REFRESCAR');
    this.refreshComic.emit(true);
  }

}
