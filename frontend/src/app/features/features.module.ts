import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/pages/home/home.component';
import { MainComponent } from './components/main/main.component';
import { RecentsComponent } from './components/recents/recents.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    RecentsComponent,
    NewsletterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HomeComponent
  ]
})
export class FeaturesModule { }
