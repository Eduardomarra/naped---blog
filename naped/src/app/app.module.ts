import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimesModule } from './features/animes/animes.module';
import { CadastroModule } from './features/cadastro/cadastro.module';
import { FeaturesModule } from './features/features.module';
import { FilmesModule } from './features/filmes/filmes.module';
import { GamesModule } from './features/games/games.module';
import { HomeModule } from './features/home/home.module';
import { LoginModule } from './features/login/login.module';
import { SeriesModule } from './features/series/series.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FeaturesModule,
    HomeModule,
    AnimesModule,
    FilmesModule,
    GamesModule,
    LoginModule,
    SeriesModule,
    CadastroModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
