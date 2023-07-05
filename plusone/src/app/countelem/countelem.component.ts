import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-countelem',
  templateUrl: './countelem.component.html',
  styleUrls: ['./countelem.component.scss']
})
export class CountelemComponent {

  totalChild: number= 0;

  @Output()
  outVar = new EventEmitter<number>()

  calculer(nombre : number){
    this.sendToParent(nombre);
    this.totalChild += nombre;
  }

  sendToParent(nombre : number){
    this.outVar.emit(nombre);
  }
}
