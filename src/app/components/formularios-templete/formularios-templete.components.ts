import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormControlName, FormBuilder } from '@angular/forms';
import { AppServiceService } from 'src/app/service/app-service.service';
import { Router } from '@angular/router';
import { browser } from 'protractor';

@Component({
  selector: 'app-formularios-templete',
  templateUrl: './formularios-templete.component.html',
  styles: []
})
export class FormulariosTempleteComponent implements OnInit {

  
  
  constructor(private _AppServiceService:AppServiceService, private router:Router, private fb:FormBuilder) {
    //Se ejecuta cuando entra el componente 
  }
  
  public formulario: FormGroup;



  ngOnInit() { 
      //Ejecuta
      this.crearformulario();
  }

 public crearformulario():void{
     this.formulario = new FormGroup({
         email: new FormControl(null,[Validators.required, Validators.pattern( /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)]),
         password: new FormControl(null,[Validators.minLength(8), Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)])
     })
    }

    obtenervalores(){
      this._AppServiceService.PostLogin(this.formulario.value).subscribe((data:{token:string})=>{
        localStorage.setItem('token',data.token)
        this.router.navigate(['/principal'])
      })
      console.log(this.formulario.value)
    }

    mensajeerror(){
      return this.formulario.get('password').hasError('required')?'Debe introducir un valor':this.formulario.get('password').hasError('pattern')?'Contraseña invalida':null
    }

    mensajeerroremail(){
      return this.formulario.get('email').hasError('required')?'Debe introducir un valor':this.formulario.get('email').hasError('pattern')?'Email invalido':null
    }
    

}