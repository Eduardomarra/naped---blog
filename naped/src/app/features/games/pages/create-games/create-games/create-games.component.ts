import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  templateUrl: './create-games.component.html',
  styleUrls: ['./create-games.component.scss']
})
export class CreateGamesComponent implements OnInit {

  formGames = new FormGroup({
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
    const formValue = this.formGames.value;

    this.categoriesService.createNewPost(formValue, "games").subscribe((res) => {
      this.router.navigate(['/games'])
    })
  }
}
