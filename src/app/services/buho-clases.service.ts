import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {BuhoClass} from '../modules/BuhoClass';

@Injectable({
  providedIn: 'root'
})
export class BuhoClasesService {
  
  API_URI = "https://elbuhoenseña.com/api"

  constructor(private http: HttpClient) { }

  GetClases(){
    return this.http.get(`${this.API_URI}/classes`);
  }

  getBuhoClass(id: string){
    return this.http.get(`${this.API_URI}/classes/${id}`);
  }

  savebuhoClass(buhoClass: BuhoClass){
    return this.http.post(`${this.API_URI}/classes`,buhoClass);
  }

  deletebuhoClass(id: string){
    return this.http.delete(`${this.API_URI}/classes/${id}`);
  }

  updatebuhoClass(id: string|number|undefined, updatedBuhoClass: BuhoClass){
    return this.http.put(`${this.API_URI}/classes/${id}`,updatedBuhoClass)
  }

}
