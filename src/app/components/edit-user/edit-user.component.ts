import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { UserTable } from 'src/app/model/User';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user:UserTable;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.getUser(id);
    })
    this.editForm=this.formBuilder.group({
      id:[],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["", Validators.required]
    })
  }

  getUser(id: number): UserTable {
     this.userService.getUser(id).subscribe(data => { this.user = data });
     return this.user;
  }

  onSubmit(){
    this.userService.editUser(this.user).subscribe(data =>{
      console.log(data)
      alert("user edited successfully");
    });
  }
}
