import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

private playerUrl="https://cricapi.com/api/playerFinder?apikey=XlTEfXTY91cQn4AywhSf0j1oADn1&name="
  constructor(private http:HttpClient) { }
  playerInfo=[];

  searchPlayer(player){
    this.http.get<any>(`${this.playerUrl}${player}`).subscribe(user=>{
      this.playerInfo=user.data;
    });

  }

  ngOnInit() {
  }

}
