import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Personal } from '../../models/personal';
import { DoctoresService } from '../../app/doctores.service';

@Component({
  selector: 'app-listar-doctores',
  imports: [CommonModule],
  templateUrl: './listar-doctores.component.html',
  styleUrl: './listar-doctores.component.css'
})
export class ListarDoctoresComponent {
  misDoctores!: Personal[];

  constructor (private doctoresService: DoctoresService) {
    
  }

  ngOnInit() {
    this.misDoctores = this.doctoresService.getAll();
    console.log(this.misDoctores);
  }
}
