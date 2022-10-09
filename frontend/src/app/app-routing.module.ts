import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimesComponent } from './features/animes/pages/animes/animes.component';
import { CreateAnimesComponent } from './features/animes/pages/create-animes/create-animes/create-animes.component';
import { DetailsAnimesComponent } from './features/animes/pages/details-animes/details-animes/details-animes.component';
import { CadastroComponent } from './features/cadastro/pages/cadastro/cadastro.component';
import { CreateFilmeComponent } from './features/filmes/pages/create-filme/create-filme.component';
import { DetailsPageComponent } from './features/filmes/pages/details-page/details-page/details-page.component';
import { FilmesComponent } from './features/filmes/pages/filmes/filmes.component';
import { CreateGamesComponent } from './features/games/pages/create-games/create-games/create-games.component';
import { DetailsGamesComponent } from './features/games/pages/details-games/details-games/details-games.component';
import { GamesComponent } from './features/games/pages/games/games.component';
import { HomeComponent } from './features/home/pages/home/home.component';
import { LoginComponent } from './features/login/pages/login/login.component';
import { CreateSeriesComponent } from './features/series/pages/create-series/create-series/create-series.component';
import { DetailsSeriesComponent } from './features/series/pages/details-series/details-series/details-series.component';
import { SeriesComponent } from './features/series/pages/series/series.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'series', component: SeriesComponent, canActivate: [AuthGuard] },
  { path: 'series-details/:serieId', component: DetailsSeriesComponent, canActivate: [AuthGuard] },
  { path: 'create-series', component: CreateSeriesComponent },
  { path: 'filmes', component: FilmesComponent, canActivate: [AuthGuard] },
  { path: 'filmes-details/:filmeId', component: DetailsPageComponent, canActivate: [AuthGuard] },
  { path: 'create-filmes', component: CreateFilmeComponent },
  { path: 'animes', component: AnimesComponent, canActivate: [AuthGuard] },
  { path: 'animes-details/:animeId', component: DetailsAnimesComponent, canActivate: [AuthGuard] },
  { path: 'create-animes', component: CreateAnimesComponent },
  { path: 'games', component: GamesComponent, canActivate: [AuthGuard] },
  { path: 'game-details/:gameId', component: DetailsGamesComponent, canActivate: [AuthGuard] },
  { path: 'create-games', component: CreateGamesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: CadastroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
