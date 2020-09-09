import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserTable } from 'src/app/model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  baseUrl:string = "http://localhost:3000/users";

  constructor(private _http : HttpClient) { }
  getAllUsers(){
    return this._http.get<UserTable[]>(this.baseUrl)
  }
  getUser(id : number){
    return this._http.get<UserTable>(this.baseUrl+'/'+id);
  }
  addUser(user) { 
     return this._http.post<UserTable>(this.baseUrl,JSON.stringify(user),this.httpOptions)
  }

  delUser(id:number){
    return this._http.delete(this.baseUrl+'/'+id);
  }

  editUser(user){
    let id = user.id;
    return this._http.put(this.baseUrl+'/'+id,user,this.httpOptions);
  }
  
}
