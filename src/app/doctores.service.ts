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

  delete(idDoc: number): void {
    const index = this.doctores.findIndex(doc => doc.id === idDoc);
    if (index !== -1) {
      this.doctores.splice(index, 1);
      localStorage.setItem('Doctores', JSON.stringify(this.doctores));
    }
  }

  update(objeto: Personal): void {
    const index = this.doctores.findIndex(doc => doc.id === objeto.id);
    if (index !== -1) {
      this.doctores[index] = objeto;
      localStorage.setItem('Doctores', JSON.stringify(this.doctores));
    }
  }
}
