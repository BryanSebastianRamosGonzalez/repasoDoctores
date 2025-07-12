import { Component } from '@angular/core';
import { Personal } from '../../models/personal';
import { DoctoresService } from '../../app/doctores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar',
  imports: [FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css',
})
export class EditarComponent {
  doctor: Personal = {
    nombre: '',
    edad: 0,
    sueldo: 0,
    antiguedad: 0,
    foto: '',
    id: 0,
  };

  mensajeExito: string = '';
  esFemenino: boolean = false;

  constructor(
    private servicio: DoctoresService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      const encontrado = this.servicio.getById(id);
      if (encontrado !== null) {
        this.doctor = { ...encontrado };
      } else {
        this.mensajeExito = 'Doctor no encontrado';
      }
    });
  }

  actualizar(): void {
    this.servicio.update(this.doctor);
    this.mensajeExito = `Doctor con id ${this.doctor.id} actualizado correctamente.`;

    setTimeout(() => {
      this.mensajeExito = '';
      this.router.navigate(['/listar']);
    }, 3000);
  }

  asignarFotoaleatorio(){
    let genero;
    const id = Math.floor(Math.random() * 100);
    if(this.esFemenino){
      genero = 'women';
  } else {
      genero = 'men';
  }
  this.doctor.foto = `https://randomuser.me/api/portraits/${genero}/${id}.jpg`;
}
}
