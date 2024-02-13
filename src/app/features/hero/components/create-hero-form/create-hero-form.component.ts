import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { FormsHeaderComponent } from '../../../../core/components/forms-header/forms-header.component';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-create-hero-form',
  standalone: true,
  imports: [CardModule, CalendarModule, CommonModule, FormsHeaderComponent, ButtonModule, FileUploadModule, ReactiveFormsModule, InputTextModule, InputTextareaModule, DropdownModule],
  templateUrl: './create-hero-form.component.html',
  styleUrl: './create-hero-form.component.scss'
})
export class CreateHeroFormComponent {

  //Variable para crear el formulario reactivo
  public createHeroForm: FormGroup = this._fb.group({});

  ngOnInit(){

    this.initForm();
  }

  //Inicializar el formulario

  initForm(){
    this.createHeroForm = this._fb.group({
      nombre_real: ['', Validators.required],
      nombre_personaje: ['', Validators.required],
      primera_aparicion: [new Date(),Validators.required],
      descripcion:['',Validators.required],
      id_categoria: [Validators.required],
      id_franquicia: [Validators.required]
    })
  }

  //Guardar heroe
  onSubmit(){

  }


  constructor(
    private _fb: FormBuilder
  ){  }

}
