import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mensaje:string;
  alerta:any=false;

  usuario = {
    email: '',
    password: ''
  }

  constructor(public router: Router


  ) { }

  ngOnInit() {

  }

  mensajeTime(){

    this.alerta=false;

    // alert("That was really slow!");

  }

  enviar(form) {

    // console.log(form);

    // console.log(form.valid);

    if (form.valid) {

      console.log(form.value);

      form.reset();

      this.router.navigate(['dashboard']);
      
    }else{

      this.alerta=true;
      this.mensaje="Campos obligatorios"
      // form.reset();

      console.log('Formulario invalido');

      // this.alerta=setTimeout(this.mensajeTime, 3000);

    } 

  }

}
