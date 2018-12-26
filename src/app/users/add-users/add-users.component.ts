import { Component, OnInit } from '@angular/core';

import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { FormBuilder } from '@angular/forms';

import { UsersService } from '../../services/users.service';

import { Router } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-addusers',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  mensaje: string;
  alerta: any = false;

  user = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    role:''
  }

  constructor(public router: Router,
    public flashMessagesService:FlashMessagesService,
    private usersService: UsersService  

  ) { }

  ngOnInit() {

  

  }

  register(formulario) {

    //  console.log(formulario.value);


    if (formulario.valid) {   

      this.usersService.addUsers(
        formulario.value.firstName,
        formulario.value.lastName,
        formulario.value.email,
        formulario.value.password,
        formulario.value.role
      );

      this.flashMessagesService.show('New client added', {cssClass:'alert-success', timeout: 4000});
      this.router.navigate(['users']);

    } else {

      //  this.alerta=true;
      //  this.mensaje="Campos obligatorios"

        console.log("Formulario invalido");

        this.flashMessagesService.show('Please fill in all fields', {cssClass:'alert-danger', timeout: 4000});
        this.router.navigate(['add']);
    }



  }

}

