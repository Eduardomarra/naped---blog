import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './pages/series/series.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailsSeriesComponent } from './pages/details-series/details-series/details-series.component';
import { CreateSeriesComponent } from './pages/create-series/create-series/create-series.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SeriesComponent,
    DetailsSeriesComponent,
    CreateSeriesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ]
})
export class SeriesModule { }
