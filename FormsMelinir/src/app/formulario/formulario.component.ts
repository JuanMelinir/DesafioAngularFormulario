import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formularioContacto!: FormGroup;
  constructor(private fb:FormBuilder) { }
  
  ngOnInit(): void {
  this.formularioContacto=this.fb.group({
  usuario:['',[Validators.required,Validators.email]],
  contrasena:['',Validators.required,Validators.minLength(4),Validators.maxLength(8)],
  mensaje:['Este es el mensaje']
})
  }
  submit(){
    console.log(this.formularioContacto.value);
  }

}
