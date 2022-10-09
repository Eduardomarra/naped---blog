import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './pages/games/games.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailsGamesComponent } from './pages/details-games/details-games/details-games.component';
import { CreateGamesComponent } from './pages/create-games/create-games/create-games.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GamesComponent,
    DetailsGamesComponent,
    CreateGamesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class GamesModule { }
