import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
Fname:string="Niharika";
Lname:string = "Gupta";
Age:number = 22;
salary:number = 30000;
Gender:string="female";
  constructor() { }

  ngOnInit(): void {
  }

}
