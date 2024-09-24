import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  userName:string[]=[];
  userData(name:string[]){
    this.userName=name;
  }
}
