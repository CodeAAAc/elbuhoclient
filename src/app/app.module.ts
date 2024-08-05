import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ClassFormComponent } from './components/class-form/class-form.component';
import { ClassListComponent } from './components/class-list/class-list.component';

import { TokenIncerceptorService } from './services/token-incerceptor.service';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {BuhoClasesService} from './services/buho-clases.service';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ClassFormComponent,
    ClassListComponent,
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BuhoClasesService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIncerceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
