import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';
import { CardComponent } from './card/card.component';
import { LoadingComponent } from './loading/loading.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RatingStarsComponent,
    CardComponent,
    LoadingComponent,
    ComentariosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RatingStarsComponent,
    CardComponent,
    LoadingComponent,
    ComentariosComponent
  ]
})
export class ComponentsModule { }
