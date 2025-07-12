import { Component } from '@angular/core';
import { DoctoresService } from '../../app/doctores.service';
import { Personal } from '../../models/personal';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar',
  imports: [CommonModule, FormsModule],
  templateUrl: './actualizar.component.html',
  styleUrl: './actualizar.component.css',
})
export class ActualizarComponent {
  Doctores: Personal[] = [];

  constructor(private servicio: DoctoresService, private router : Router) {}

  ngOnInit(): void {
    this.Doctores = this.servicio.getAll();
  }

  irAEditar (id:number){
    this.router.navigate(['/editar', id]);
  }
}
