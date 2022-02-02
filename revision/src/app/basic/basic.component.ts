import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  clsName='one';
  clsName2='two';
  success_msg=true;
  success_msge=false;
name=[{
  firstname: "khyati",
  lastname: "patel",
  age: 22
} ,{
firstname: "bhavin",
  lastname: "patel",
  age: 22
},
{
  firstname: "hemal",
  lastname: "patel",
  age: 22 }]
  container=[
    { name:'khyati'},
   {name:'bhavin'},
   {name:'hemal'},
   {name:'harshil'},
   {name:'hardik'}

   ]
   display=true;
   ststus:boolean=true;
   Title="Anguler";
   info={
     name:"khyati",
     surname:"Patel",
     dob:Date(),
     numbers:100,
   }
}
