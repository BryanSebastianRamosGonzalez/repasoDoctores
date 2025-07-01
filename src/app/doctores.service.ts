import { Injectable } from '@angular/core';
import { Personal } from '../models/personal';
import plantilla from '../data/plantilla.json';

@Injectable({
  providedIn: 'root'
})
export class DoctoresService {
  doctores: Personal[] = plantilla;

  constructor() { }

  ngOnInit() {
  
  }

  getAll(): Personal[] {
    const recuperaDatos = JSON.parse(localStorage.getItem('Doctores') ?? '[]');
    if(recuperaDatos.length === 0){
      this.doctores = plantilla;
    }
    else{
      this.doctores = recuperaDatos;
    }
    return this.doctores;
  }

  getById(id: number): Personal | null {
    const encontrado = this.doctores.find(doc => doc.id === id);

    return encontrado || null;
  }
  create(objeto: Personal): void {
    this.doctores.push(objeto);
    localStorage.setItem('trabajadores', JSON.stringify(this.doctores));
  }
}
