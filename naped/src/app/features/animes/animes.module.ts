import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimesComponent } from './pages/animes/animes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeaturesModule } from '../features.module';
import { DetailsAnimesComponent } from './pages/details-animes/details-animes/details-animes.component';
import { CreateAnimesComponent } from './pages/create-animes/create-animes/create-animes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AnimesComponent,
    DetailsAnimesComponent,
    CreateAnimesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FeaturesModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ]
})
export class AnimesModule { }
