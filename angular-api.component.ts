import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-angular-api',
  templateUrl: './angular-api.component.html',
  styleUrls: ['./angular-api.component.css'],
})
export class AngularApiComponent implements OnInit {
//reactive form
userDetails=new FormGroup({
  name:new FormControl(''),
  email:new FormControl(''),
})

onSubmit(){
    this.addUsers().subscribe((Response)=>{
      this.users.push(Response);
    })
}

users:User[]=[];   
constructor(private http:HttpClient){

}

ngOnInit():void{
  this.getUsers().subscribe((response)=>{
    console.log(this.users=response);

  })
}

getUsers(){
   return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
}

addUsers(){
  return this.http.post<User>('https://jsonplaceholder.typicode.com/users',{
    name:this.userDetails.controls.name.value,
    email:this.userDetails.controls.email.value,
  });
}
deleteData(i: any, id: any) {
   this.http.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
   this.users?.splice(i,1);
}


editData(i:any,id:any){
    this.users.map((user:any)=>{
      if(user.id==id){
        this.addUsers().subscribe((Response:any)=>{
          this.users?.splice(i, 0, Response)
          // this.users.replace(user,Response);
          
        })
      }
    })
    this.getUsers();
}

}


class User{
  name!:string;
  email!:string;
  id!:number;
}