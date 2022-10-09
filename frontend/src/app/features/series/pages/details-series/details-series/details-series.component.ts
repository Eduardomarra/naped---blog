import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/shared/model/categorie.modal';
import { User } from 'src/app/shared/model/user.model';
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  templateUrl: './details-series.component.html',
  styleUrls: ['./details-series.component.scss']
})
export class DetailsSeriesComponent implements OnInit {

  categorie?: Categorie;
  isEdit = false;
  user?: User

  formSerie = new FormGroup({
    id: new FormControl(this.categorie?.id),
    title: new FormControl("",[Validators.required]),
    src: new FormControl("",[Validators.required]),
    description: new FormControl("", [Validators.required]),
    date: new FormControl("",[Validators.required]),
    category: new FormControl("",[Validators.required])
  });

  constructor(
    private activedRoute: ActivatedRoute,
    private categoriesService: CategoriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      const id = parseInt(params['serieId']);
      this.categoriesService.getById(id, "series").subscribe((serie) => {
        this.categorie = serie;
      });
    });

    const userSessionStorage = sessionStorage.getItem('user');
    if (userSessionStorage){
      this.user = JSON.parse(userSessionStorage);
    }
  }

  saveEdit(idSerie: number) {
    this.categoriesService.update({ id: idSerie }, this.formSerie.value, "series").subscribe((res) => {
        alert('Serie alterado com sucesso!');
        this.router.navigate(['/series']);
      });
  }

  delete(idSerie: number) {
    this.categoriesService.remove(idSerie, "/series/").subscribe((res) => {
      alert('Serie removido com sucesso!');
      this.router.navigate(['/series']);
    });
  }

  editFilme(id: number, description: string, src: string, title: string, date: string, category: string) {
    this.isEdit = true;
    this.formSerie.controls['id'].setValue(id);
    this.formSerie.controls['title'].setValue(title);
    this.formSerie.controls['src'].setValue(src);
    this.formSerie.controls['description'].setValue(description);
    this.formSerie.controls['date'].setValue(date);
    this.formSerie.controls['category'].setValue(category);
  }

}
