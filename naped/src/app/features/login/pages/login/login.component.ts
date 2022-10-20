import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = "";
  senha: string = "";
  error = false;

  constructor(
    private usersService: UsersService,
    private router: Router
    ) { }

  ngOnInit(): void {
    setTimeout(() =>{
      alert('Este projeto foi desenvolvido para aplicar conhecimentos em Angular. Apenas para fins didáticos.')
      alert('Para acessar configurações de ADM, logar com adm@gmail.com (123456)')
    },3000)
  }

  authenticateByUser() {
    const user = this.usersService.getUserByEmailAndPassword(this.email, this.senha);

    if(user && user.adm) {
      sessionStorage.setItem('user', JSON.stringify(user));
      this.router.navigateByUrl('/home');
    } else if(user && !user.adm) {
      sessionStorage.setItem('user', JSON.stringify(user));
      this.router.navigateByUrl('/home');
    } else {
      this.error = true;
    }
  }
}
