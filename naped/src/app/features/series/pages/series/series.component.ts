import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/shared/model/categorie.modal';
import { User } from 'src/app/shared/model/user.model';
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  title = 'Séries';
  description = 'O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.'

  series: Categorie[] = []
  user?: User

  pesquisar: string = ""

  constructor(
    private categoriesService: CategoriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoriesService.getcategories("series").subscribe((serie) => {
      this.series = serie;
    });

    const userSessionStorage = sessionStorage.getItem('user');
    if (userSessionStorage){
      this.user = JSON.parse(userSessionStorage);
    }
  }

  detalhesSerie(idSerie: number) {
    this.router.navigateByUrl(`series-details/${idSerie}`);
  }

  search() {

    if(this.pesquisar.length) {
      this.series = this.series.filter(serie => serie.description.toLowerCase().includes(this.pesquisar))
    } else {
      this.categoriesService.getcategories("series").subscribe((series) => {
        this.series = series;
      });
    }
  }

}
