import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})
export class ComicComponent implements OnInit {

  comic: Comic;

  constructor( private generalService: GeneralService ) { }

  ngOnInit(): void {
    this.cargarComic();
  }

  cargarComic(): void {
    const idComic = Math.floor(Math.random() * 1000);
    this.generalService.getComic( idComic ).subscribe((response) => {
      this.comic = response.data;
    });
  }

}
