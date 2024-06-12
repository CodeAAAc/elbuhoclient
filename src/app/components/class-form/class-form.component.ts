import { Component } from '@angular/core';
import {BuhoClass} from '../../modules/BuhoClass';
import {Router, ActivatedRoute} from '@angular/router';

import {BuhoClasesService} from '../../services/buho-clases.service';

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrl: './class-form.component.css'
})
export class ClassFormComponent {

  buhoClass: BuhoClass = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  };

  edit: boolean = false;

  constructor(private buhoClasesService: BuhoClasesService, private router: Router, private activatedRoute: ActivatedRoute){
    const params = this.activatedRoute.snapshot.params;

    if(Object.keys(params).length){
      this.buhoClasesService.getBuhoClass(Object.values(params)[0])
      .subscribe(
        res => {
          console.log(res);
          this.buhoClass = res;
          this.edit = true;
        },
        err => {
          console.error(err);
        }
      )
    }

    
  }

  saveNewBuhoClass(){
    delete this.buhoClass.created_at;
    delete this.buhoClass.id;
    console.log(this.buhoClass);
    this.buhoClasesService.savebuhoClass(this.buhoClass)
    .subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/'])
      },
      err => console.error(err)
    )
  }

  updateBuhoClass(){
    delete this.buhoClass.created_at;
    this.buhoClasesService.updatebuhoClass(this.buhoClass.id, this.buhoClass)
    .subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/'])
      },
      err => console.error(err)
    )

  }





}
