import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddnumbers:number[]=[1,3,5]
  renumbers:number[]=[2,4];
  onlyodd = false;
  title = 'test';
}
