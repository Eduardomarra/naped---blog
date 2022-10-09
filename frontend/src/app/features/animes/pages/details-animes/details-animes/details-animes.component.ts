import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/shared/model/categorie.modal';
import { User } from 'src/app/shared/model/user.model';
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  templateUrl: './details-animes.component.html',
  styleUrls: ['./details-animes.component.scss'],
})
export class DetailsAnimesComponent implements OnInit {

  categorie?: Categorie;
  isEdit = false;
  user?: User;

  formAnimes = new FormGroup({
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
      const id = parseInt(params['animeId']);
      this.categoriesService.getById(id, "animes").subscribe((anime) => {
        this.categorie = anime;
      });
    });

    const userSessionStorage = sessionStorage.getItem('user');
    if (userSessionStorage){
      this.user = JSON.parse(userSessionStorage);
    }
  }

  saveEdit(idAnime: number) {
    this.categoriesService.update({ id: idAnime }, this.formAnimes.value, "animes").subscribe((res) => {
        alert('Anime alterado com sucesso!');
        this.router.navigate(['/animes']);
      });
  }

  delete(idAnime: number) {
    this.categoriesService.remove(idAnime, "/animes/").subscribe((res) => {
      alert('Anime removido com sucesso!');
      this.router.navigate(['/animes']);
    });
  }

  editFilme(id: number, description: string, src: string, title: string, date: string, category: string) {
    this.isEdit = true;
    this.formAnimes.controls['id'].setValue(id);
    this.formAnimes.controls['title'].setValue(title);
    this.formAnimes.controls['src'].setValue(src);
    this.formAnimes.controls['description'].setValue(description);
    this.formAnimes.controls['date'].setValue(date);
    this.formAnimes.controls['category'].setValue(category);
  }
}
