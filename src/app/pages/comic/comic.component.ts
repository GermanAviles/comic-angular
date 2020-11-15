import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';
import { Comic } from '../../models/comic';
import { Comentario } from 'src/app/models/comentario';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})
export class ComicComponent implements OnInit {

  comic: Comic;
  comentarios: Comentario [] = [];

  constructor( private generalService: GeneralService ) { }

  ngOnInit(): void {
    this.cargarComic();
  }

  cargarComic(): void {
    this.comic = null;
    const idComic = Math.floor(Math.random() * 1000);
    this.generalService.getComic( idComic ).subscribe((response) => {
      this.comic = response.data;
    });
  }

  nuevoCometario( comentario: Comentario ): void {
    console.log('COMENTARIO: ', comentario);
    this.comentarios.push(comentario);
  }

}
