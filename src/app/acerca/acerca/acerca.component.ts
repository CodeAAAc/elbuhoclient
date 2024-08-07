import { Component } from '@angular/core';
import { AcercaService } from '../acerca.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrl: './acerca.component.css'
})
export class AcercaComponent {

  Info: any = [];

  constructor(private acercaService: AcercaService) {
    this.getInfo();
  }

  getInfo() {
    this.acercaService.GetAcerca().
      subscribe(
        res => {
          this.Info = res;
        },
        err => console.error(err)
      )
  }


}
