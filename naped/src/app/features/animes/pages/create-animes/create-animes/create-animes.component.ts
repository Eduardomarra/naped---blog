import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  templateUrl: './create-animes.component.html',
  styleUrls: ['./create-animes.component.scss']
})
export class CreateAnimesComponent implements OnInit {

  formAnime = new FormGroup({
    title: new FormControl("",[Validators.required]),
    src: new FormControl("",[Validators.required]),
    description: new FormControl("", [Validators.required]),
    date: new FormControl("",[Validators.required]),
    category: new FormControl("",[Validators.required])
  });

  constructor(
    private categoriesService: CategoriesService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const formValue = this.formAnime.value;

    this.categoriesService.createNewPost(formValue, "animes").subscribe((res) => {
      this.router.navigate(['/animes'])
    })
  }
}
