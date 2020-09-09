import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/Products';
@Component({
  selector: 'app-emp',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  Subjects:string[]=["Angular", "Java", "C#"];
  employees: any[] = [
    {
      code: 'emp101', name: 'Rashmi', gender: 'Female',
      annualSalary: 5500, dateOfBirth: '05/16/1988'
    },
    {
      code: 'emp101', name: 'Nisha', gender: 'Female',
      annualSalary: 5500, dateOfBirth: '05/16/1988'
    },
    {
      code: 'emp101', name: 'Abhay', gender: 'Male',
      annualSalary: 5500, dateOfBirth: '05/16/1988'
    }
  ];

  id:number=10;
  name:string="IPhone";
  cost:number=100000;
  category:string="Electronics";

  // Object
  pro:Product={id:11,name:"Note8",cost:43434,category:'Electronics'};

  // Array
  products:Product[]=[
    {id:11,name:"Note8",cost:43434,category:'Electronics'},
    {id:12,name:"Keyboard",cost:3434,category:'Electronics'},
    {id:13,name:"Chair",cost:4434,category:'Furniture'}
  ];

  //function
  MyFunction(){
    alert('Hello you clicked me!');
  }

  deleteProduct(id: number){
    alert("Product to be deleted: " + id);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
