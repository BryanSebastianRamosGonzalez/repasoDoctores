import { Component } from '@angular/core';
import { Personal } from '../../models/personal';
import { DoctoresService } from '../../app/doctores.service';

@Component({
  selector: 'app-eliminar',
  imports: [],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent {
  Doctores: Personal[] = [];

    mensajeEliminado = '';
    timeoutId: any;

  constructor(private servicio: DoctoresService) {}

  ngOnInit() {
    this.cargarDoctores();
  }

  cargarDoctores() {
    this.Doctores = this.servicio.getAll();
  }

  eliminarEmpleado(id: number) {
    this.servicio.delete(id);
    this.mensajeEliminado = `Empleado con ID ${id} eliminado.`;
    
     // Cancela cualquier temporizador anterior
    clearTimeout(this.timeoutId);

    // Inicia un nuevo temporizador de 3 segundos
    this.timeoutId = setTimeout(() => {
      this.mensajeEliminado = ''; // Borra el mensaje
     
    }, 2000);

     this.cargarDoctores(); // recarga la lista después de eliminar  
}
}
