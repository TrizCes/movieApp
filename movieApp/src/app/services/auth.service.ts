import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private email!: string;
  private password!: string;

  constructor() { };

  isLoggedIn(): boolean {

    return false;
  };
}
