import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmesComponent } from './pages/filmes/filmes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateFilmeComponent } from './pages/create-filme/create-filme.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DetailsPageComponent } from './pages/details-page/details-page/details-page.component';

@NgModule({
  declarations: [
    FilmesComponent,
    CreateFilmeComponent,
    DetailsPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ]
})
export class FilmesModule { }
