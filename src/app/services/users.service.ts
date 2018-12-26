import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';

// importamos para poder usar map
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient
   
    ) {

     }

     public addUsers(first_name,last_name,email,password,role){

      const url = environment.base_url + '/api/add/users';
  
      this.http.post(url, {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      role: role
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  
    }


     public getUsers(){

      const url = environment.base_url + '/api/users';
  
      return this.http.get(url);
  
    }
  
    public deleteUsers(id){
  
      const url = environment.base_url + '/api/delete/users/' + id;      
  
      return this.http.delete(url);
  
    }
  
    public getUsersById(id){
  
      const url = environment.base_url + '/api/view/users/' + id;
  
      return this.http.get(url);
  
    }
  
    public editUsersById(id){
  
      const url = environment.base_url + '/usuarios/' + id + '/edit';
  
      return this.http.get(url);
  
    }



}
