import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/shared/model/categorie.modal';
import { User } from 'src/app/shared/model/user.model';
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {

  title = 'Filmes';
  description = 'O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.'

  filmes: Array<Categorie> = []
  user?: User

  pesquisar: string = ""

  constructor(
    private categoriesService: CategoriesService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.categoriesService.getcategories("filmes").subscribe( (filme) => {
      this.filmes = filme
    })

    const userSessionStorage = sessionStorage.getItem('user');
    if (userSessionStorage){
      this.user = JSON.parse(userSessionStorage);
    }
  }

  detalhesFilme(idFilme: number) {
    this.router.navigateByUrl(`filmes-details/${idFilme}`);
  }

  search() {

    if(this.pesquisar.length) {
      this.filmes = this.filmes.filter(filme => filme.title.toLowerCase().includes(this.pesquisar))
    } else {
      this.categoriesService.getcategories("filmes").subscribe((filmes) => {
        this.filmes = filmes;
      });
    }
  }
}
