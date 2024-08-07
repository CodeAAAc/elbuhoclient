import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URI = "http://localhost:3000/api"

  constructor(private http: HttpClient, private router: Router) { }

  SignIn(User: any){
    return this.http.post(`${this.API_URI}/auth`,User);
  }

  getLogIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): any {
    return localStorage.getItem('token'); 
  }

  signOut(): any {
    localStorage.removeItem('token');
    this.router.navigate(['/signIn'])

  }

}
