import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  firstname = 'Thomas';
  lastname = 'Cardon';
  age = '36';
  employed = true;
}
