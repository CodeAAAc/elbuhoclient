import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenIncerceptorService implements HttpInterceptor{

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token1 = !this.authService.getLogIn();

     const tokenizable = req.clone({
      setHeaders: {
        authorization: !this.authService.getLogIn() ? '' :  this.authService.getToken()
      }
     }) 

     return next.handle(tokenizable);
  }  


}
