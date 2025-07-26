import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  formEnviado: boolean = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Formulario enviado:', this.contactForm.value);

      // Mostrar mensaje de éxito
      this.formEnviado = true;

      // Reiniciar el formulario
      this.contactForm.reset();

      // Ocultar mensaje después de 3 segundos
      setTimeout(() => {
        this.formEnviado = false;
      }, 3000);
    } else {
      // Marcar todos los campos como tocados para que se muestren los errores
      this.contactForm.markAllAsTouched();
    }
  }
};

