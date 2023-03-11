import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private statusLogin: boolean = false;

  constructor(private router: Router) { };

  login(user: User): boolean {

    if(user.email === 'user@email.com' && user.password === '123456'){
      console.log('Acesso liberado');
      this.statusLogin = true;
      this.router.navigate(['']);
    }else{
      this.statusLogin = false;
      console.error("Credenciais inválidas");
    }
    return this.statusLogin;
  };

  loggedIn(): boolean {
    return this.statusLogin;
  }



/*
  loggedIn(email: string, password: string): boolean {
    console.log('loggeg In foi chamada');

    if(email === 'user@email.com' && password === '123456'){
      console.log('Acesso liberado');
      this.statusLogin = true;
    }else{
      this.statusLogin = false;
      console.error("Credenciais inválidas");
    }
    return this.statusLogin;
  };*/
}
