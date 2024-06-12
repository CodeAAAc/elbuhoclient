import { Component } from '@angular/core';
import {BuhoClasesService} from '../../services/buho-clases.service';
import { AuthService } from '../../services/auth.service';
// import {BuhoClass} from '../../modules/BuhoClass';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrl: './class-list.component.css'
})
export class ClassListComponent {

  buhoClases: any = [];

  constructor(private buhoClasesService: BuhoClasesService, public authService: AuthService){
    this.getBuhoClases();
  }

  getBuhoClases(){
    this.buhoClasesService.GetClases().
    subscribe(
      res => {
        this.buhoClases = res;
      },
      err => console.error(err)
    )
  }

  deleteBuhoClass(id: string){
    this.buhoClasesService.deletebuhoClass(id)
    .subscribe(
      res => {
        console.log(res)
        this.getBuhoClases();
      },
      err => console.error(err)
    )

  }

  // updateBuhoClass(id: string){
  //   console.log(id)
  // }

}
