import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {
  //color="red";
  toggleClass=false;

  toggleState(){
    this.toggleClass=!this.toggleClass;
    console.log("click event is working here")


  }
  dynamicCss(){
    return {
      "bg-success":true,
      "text-white": true,
      "mt-2" : true,
      "pt-4":true,
      background:this.toggleClass
    };

  }
  users=[
    {
      name: 'mansa',
      age:23,
      gender:'female',
      country:'india'
    },
    {
      name: 'anu',
      age:23,
      gender:'male',
      country:'india'
    },
    {
      name: 'kavya',
      age:23,
      gender:'female',
      country:'india'
    }

  ]

  constructor() { }

  ngOnInit() {
  }

}
