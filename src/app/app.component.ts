import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListarDoctoresComponent } from '../components/listar-doctores/listar-doctores.component';
import { AgregarDoctorComponent } from '../components/agregar-doctor/agregar-doctor.component';
import { MenuComponent } from '../components/menu/menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'repasoDoctores';
}
