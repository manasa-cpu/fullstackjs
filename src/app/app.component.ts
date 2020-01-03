import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'jspiders';
  ngOnInit(){
    var firebaseConfig = {
      apiKey: "AIzaSyDtfy_M8OtU0-d5dNBfT0On3F5cUBjJPiM",
      authDomain: "fullstack-angular-b4546.firebaseapp.com",
      databaseURL: "https://fullstack-angular-b4546.firebaseio.com",
      projectId: "fullstack-angular-b4546",
      storageBucket: "fullstack-angular-b4546.appspot.com",
      messagingSenderId: "977217618586",
      appId: "1:977217618586:web:0136020b5997b8bfd29523"
    };
    firebase.initializeApp(firebaseConfig)
    // Initialize Firebase
   // firebase.initializeApp(firebaseConfig);
  }
}
