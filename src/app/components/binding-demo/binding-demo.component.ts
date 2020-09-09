import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-demo',
  templateUrl: './binding-demo.component.html',
  styleUrls: ['./binding-demo.component.css']
})
export class BindingDemoComponent implements OnInit {
  itemCount: number = 1;
  btnText:string="Add an Item";
  message:string="Hello Students";
  goals=[];
  goal='Be a good human being-Never lie';
  constructor() { }  
  ngOnInit() {}
  
  addItem() {
      this.goals.push(this.goal);  
        this.goal= ''; 
         this.itemCount = this.goals.length;
    }
  }