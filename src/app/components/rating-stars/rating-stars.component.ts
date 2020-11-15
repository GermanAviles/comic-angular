import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.scss']
})
export class RatingStarsComponent implements OnInit {

  @Output() rating = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  cambiarValue( event ): void{
    this.rating.emit(event.target.value);
  }

}
