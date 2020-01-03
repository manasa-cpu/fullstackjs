import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee={
    emp_id:1,
    emp_photo:"https://cdn.pixabay.com/photo/2019/12/15/13/01/couple-4697055__340.jpg",
    emp_name:'mansa',
    emp_designation:'Nodejs developer',
    emp_salary:40000,
    emp_location:'mandya',
    emp_education:'BE'
  }

  constructor() { }

  ngOnInit() {
  }

}
