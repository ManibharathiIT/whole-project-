import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  @Output() nameadded:EventEmitter<string[]>=new EventEmitter;
     names:string[]=[];
     username='';
     onSubmit(username:string) {
      this.names.push(this.username);
      this.username="";
      console.log(this.names);
      this.nameadded.emit(this.names);
    }
}
