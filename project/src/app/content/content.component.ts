import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  ststus:boolean=true;
  container=[
    { name:'khyati'},
   {name:'bhavin'},
   {name:'hemal'},
   {name:'harshil'}
   ]
   display=true;
   employees=[
     {name:"khyati"},
     {name:"bhavin"},
     {name:"hemal"},
     {name:"harshil"}
   ];
   adminRole:boolean=false;
   title="Anguler";
   info={
     name:"khyati",
     surname:"Patel",
     dob:Date(),
     numbers:300,
   }
   
}
