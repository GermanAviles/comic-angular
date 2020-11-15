import { Component, OnInit, Output, EventEmitter, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { GeneralService } from '../../pages/general.service';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.scss']
})
export class RatingStarsComponent implements OnInit {

  @Output() rating = new EventEmitter<any>();
  @ViewChild('star1', { static: false }) star1: ElementRef;
  @ViewChild('star2', { static: false }) star2: ElementRef;
  @ViewChild('star3', { static: false }) star3: ElementRef;
  @ViewChild('star4', { static: false }) star4: ElementRef;
  @ViewChild('star5', { static: false }) star5: ElementRef;

  constructor( private generalService: GeneralService, private renderer: Renderer2) {
    this.generalService.$reiniciarnputs.subscribe((value: boolean) => {
      this.resetStars();
    });
  }

  ngOnInit(): void {
  }

  cambiarValue( event ): void{
    this.rating.emit(event.target.value);
  }

  resetStars(): void {
    this.star1.nativeElement.checked = false;
    this.star2.nativeElement.checked = false;
    this.star3.nativeElement.checked = false;
    this.star4.nativeElement.checked = false;
    this.star5.nativeElement.checked = false;
  }

}
