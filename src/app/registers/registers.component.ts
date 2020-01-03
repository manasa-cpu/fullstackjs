import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl , Validators} from '@angular/forms';
import { CustomValidators } from '../name.validators';

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.css']
})
export class RegistersComponent implements OnInit {

  constructor() { }

  //to create reactive form first we need to import formgroup class and FormControl class from angular form module
  
  //create formGroup instance...
  form = new FormGroup({  //forms this  parent
    //we need to create formControl instance...
  username : new FormControl("", [Validators.required , 
                                  Validators.minLength(3),
                                   Validators.pattern('jspiders'),
                                  CustomValidators.removeSpace]), //inputs
                                   
  password : new FormControl("", Validators.required) //inputs that is formcontrol

});

get username(){
  return this.form.get('username');
}//getter

get password(){
  return this.password.get('password');
}//getter

  ngOnInit() {
  }

}
