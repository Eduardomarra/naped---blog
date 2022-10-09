import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Array<User> = [
    {
      id: 2,
      nome: 'Administrador',
      email: 'adm@gmail.com',
      senha: "123456",
      adm: true
    }
  ];

  constructor() { }

  getUserByEmailAndPassword(email: string, password: string) {
    return this.users.find((user) => user.email === email && user.senha === password);
  }

  registerUser(email: string, senha: string) {
    return this.users.push({email, senha, adm: false});
  }
}
