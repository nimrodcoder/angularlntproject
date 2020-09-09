import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserTable } from 'src/app/model/User';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: UserTable[];

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit(): void {
    this._userService.getAllUsers().subscribe(data => {
        this.users = data;
      });
  }

  getAllUsersFun() {
       this._userService.getAllUsers()
         .subscribe(data => { this.users = data });
     }
  addUser() {
    this._router.navigate(['addUser']);
  }

  delUser(user){
    this._userService.delUser(user.id)
        .subscribe(response => {
          this.users = this.users.filter(item => item.id !== user.id);
        });
  }

  editUser(user){
    this._router.navigate(['editUser', user.id]);
  }
}
