import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recentes } from 'src/app/shared/model/recentes.model';

@Component({
  selector: 'app-recents',
  templateUrl: './recents.component.html',
  styleUrls: ['./recents.component.scss']
})
export class RecentsComponent implements OnInit {

  recentes: Recentes[] = [
    {
      id: 1,
      src: '../../../../../assets/images/naoko.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
      category: 'animes'
    },
    {
      id: 2,
      src: '../../../../../assets/images/GTA-5-PlayStation.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
      category: 'games'
    },
    {
      id: 3,
      src: '../../../../../assets/images/Vikings-Series.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
      category: 'filmes'
    },
    {
      id: 4,
      src: '../../../../../assets/images/soul-disney.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
      category: 'filmes'
    },
    {
      id: 5,
      src: '../../../../../assets/images/your-name.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
      category: 'animes'
    },
    {
      id: 6,
      src: '../../../../../assets/images/friends.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
      category: 'series'
    },
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleClickPage(id: number){
    this.recentes.map(rec => {
      if(rec.id === id){
        this.router.navigate([`/${rec.category}`]);
      }
    })
  }

}
