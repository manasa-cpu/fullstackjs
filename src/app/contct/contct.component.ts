import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-contct',
  templateUrl: './contct.component.html',
  styleUrls: ['./contct.component.css']
})
export class ContctComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  contctForm=this.fb.group({
    name:[Validators.required],
    email:[Validators.required]
  });

  ngOnInit() {
  }

}
