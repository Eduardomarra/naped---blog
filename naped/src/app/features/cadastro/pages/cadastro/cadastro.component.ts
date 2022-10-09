import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  id: number = 0;
  email: string = "";
  senha: string = "";
  nome: string = "";
  error = false;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  registerByUser() {
    this.usersService.registerUser(this.email, this.senha);
    alert('Usuário cadastrado com sucesso!');

    setTimeout(() => {
      const user = this.usersService.getUserByEmailAndPassword(this.email, this.senha);
        sessionStorage.setItem('user', JSON.stringify(user));
        console.log(user);

        this.router.navigateByUrl('/home');
    }, 500)
  }
}
