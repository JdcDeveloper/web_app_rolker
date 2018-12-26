import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { UsersService } from '../services/users.service';

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any;

  constructor(private usersService:UsersService,
    public router: Router
    ) {

     }

  ngOnInit() {


    this.usersService.getUsers().
    subscribe(
      res => {

        console.log(res);

        // console.log(res.data[0]);

        // console.log(res['data'][0]);

        this.users=res;

      });


  }

  delete(id){ 
    
    // console.log(id);

    Swal({
      title: 'Are you sure?',
      text: "Delete the register!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: 'Aceptar',
      cancelButtonColor: '#d33'    
     
    }).then((result) => {

      if (result.value) {
           
      Swal('Register Delete!');


        this.usersService.deleteUsers(id).
          subscribe(
            res => {

              console.log("eliminado"+res);             

            });

            this.router.navigate(['users']);

      }

     
    
      
    });
  }


  view(id){

     
    this.usersService.getUsersById(id).
    subscribe(
      res => {

        console.log(res);
         

        // this.usuarios=res['data'];

          // this.router.navigate(['ver/usuarios']);

      }); 
    

    // this.router.navigate(['ver/usuarios']);
  }

  edit(){

    this.router.navigate(['editar/usuarios']);
  }

  adminRole(id){ 
    
    // console.log(id);

    Swal({
      title: 'Are you sure?',
      text: "Change Status to Admin!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: 'Aceptar',
      cancelButtonColor: '#d33'    
     
    }).then((result) => {

      if (result.value) {
           
      Swal('Register Delete!');


        // this.usersService.deleteUsers(id).
        //   subscribe(
        //     res => {

        //       console.log("eliminado"+res);             

        //     });

        //     this.router.navigate(['users']);

      }

     
    
      
    });
  }


  userRole(id){ 
    
    // console.log(id);

    Swal({
      title: 'Are you sure?',
      text: "Change Status to User!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: 'Aceptar',
      cancelButtonColor: '#d33'    
     
    }).then((result) => {

      if (result.value) {
           
      Swal('Register Delete!');


        // this.usersService.deleteUsers(id).
        //   subscribe(
        //     res => {

        //       console.log("eliminado"+res);             

        //     });

        //     this.router.navigate(['users']);

      }

     
    
      
    });
  }


}
