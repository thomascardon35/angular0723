import { Component } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent {

  total : number = 0;

    
  valueChild(event: number) {
    this.total += event;
  }

}
