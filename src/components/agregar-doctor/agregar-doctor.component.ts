import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Personal } from '../../models/personal';
import { DoctoresService } from '../../app/doctores.service';

@Component({
  selector: 'app-agregar-doctor',
  imports: [FormsModule],
  templateUrl: './agregar-doctor.component.html',
  styleUrl: './agregar-doctor.component.css'
})
export class AgregarDoctorComponent {
  mensajeExito: string = '';

  doctor : Personal= {
    nombre: '',
    edad: 0,
    sueldo: 0,
    antiguedad: 0,
    foto: '',
    id: 0
  }

  constructor(private doctoresService:DoctoresService) {}

  esFemenino: boolean = false;
   asignarFotoaleatorio(){
    let genero;
    const id = Math.floor(Math.random() * 100);
    if(this.esFemenino){
      genero = 'women';
  } else {
      genero = 'men';
  }
  this.doctor.foto = `https://randomuser.me/api/portraits/${genero}/${id}.jpg`;
} // ESTA FUNCION NOS AYUDA A DECIRLE A LA API EL SEXO DEL EMPLEADO, EL ID ALEATORIO PARA QUE NOS DE UNA FOTO ACORDE 

guardar(){
  this.doctoresService.create(this.doctor);
  this.limpiar();
  console.log('trabajador', this.doctor);
  console.log('¿es femenino?', this.esFemenino);
} // ESTA FUNCIÓN SE ENCARGA DE GUARDAR EL EMPLEADO EN EL SERVICIO EmpleadosService Y LIMPIAR LOS CAMPOS DEL FORMULARIO

limpiar(){
  this.doctor = {
    nombre: '',
    edad: 0,
    sueldo: 0,
    antiguedad: 0,
    foto: '',
    id: 0
  };
  this.esFemenino = false;
  this.mensajeExito = 'Empleado agregado correctamente';
  setTimeout(() => {
    this.mensajeExito = '';
  }, 3000);
} // ESTA FUNCIÓN SE ENCARGA DE LIMPIAR LOS CAMPOS DEL FORMULAR Y MOSTRAR UN MENSAJE DE ÉXITO AL AÑADIR UN EMPLEADO, EL MENSAJE SE OCULTA DESPUÉS DE 3 SEGUNDOS

}
