import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string = 'Erik Hernández';
  nameStrange: string = 'eRik hErnaNdeZ vasQuEz';
  array = [1,2,3,4,5,6,7,8,9,10];

  PI: number = Math.PI;
  percentage: number = 0.234;

  salary: number = 1235.5;
  dates: Date = new Date();
  language: string = 'es';

  vidioUrl: string = "https://www.youtube.com/embed/f77SKdyn-1Y";
  active: boolean = true;

  valuePromise = new Promise<string> ( (resolve) => {
    setTimeout(() => {
      resolve('The data arrived.');
    }, 4500);
  });

  comic = {
    name: 'Logan',
    password: 'wolverine',
    age: 52,
    address: {
      street: 'First Avenue',
      house: 55
    }
  }
}
