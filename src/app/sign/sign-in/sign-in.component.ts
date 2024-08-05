import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  user : any = {

  }

  constructor(private authService: AuthService, private router: Router){}

  signIn(){
    this.authService.SignIn(this.user).
    subscribe(
      res => {
        localStorage.setItem('token', Object.values(res)[0]);
        this.router.navigate(['/'])
      },
      err => console.error(err)
    )
    
  }

}
