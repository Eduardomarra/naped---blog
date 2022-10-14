import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() =>{
      alert('Este projeto foi desenvolvido para aplicar conhecimentos em Angular. Apenas para fins didáticos.')
      alert('Para acessar configurações de ADM, logar com adm@gmail.com (123456)')
    },3000)
  }

}
