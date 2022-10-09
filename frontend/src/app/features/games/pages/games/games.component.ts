import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/shared/model/categorie.modal';
import { User } from 'src/app/shared/model/user.model';
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  title = 'Games';
  description = 'O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.'

  games: Categorie[] = [];
  user?: User

  pesquisar:string = ""

  constructor(
    private categoriesService: CategoriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoriesService.getcategories("games").subscribe((game) => {
      this.games = game;
    });

    const userSessionStorage = sessionStorage.getItem('user');
    if (userSessionStorage){
      this.user = JSON.parse(userSessionStorage);
    }
  }

  detalhesGames(idGame: number) {
    this.router.navigateByUrl(`game-details/${idGame}`);
  }

  search() {

    if(this.pesquisar.length) {
      this.games = this.games.filter(game => game.description.toLowerCase().includes(this.pesquisar))
    } else {
      this.categoriesService.getcategories("games").subscribe((games) => {
        this.games = games;
      });
    }
  }

}
