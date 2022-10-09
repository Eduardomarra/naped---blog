import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  templateUrl: './create-filme.component.html',
  styleUrls: ['./create-filme.component.scss']
})
export class CreateFilmeComponent implements OnInit {

  formFilme = new FormGroup({
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
    const formValue = this.formFilme.value;

    this.categoriesService.createNewPost(formValue, "filmes").subscribe((res) => {
      this.router.navigate(['/filmes'])
    })
  }

}
