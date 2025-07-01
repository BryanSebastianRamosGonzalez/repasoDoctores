import { Routes } from '@angular/router';
import { ListarDoctoresComponent } from '../components/listar-doctores/listar-doctores.component';
import { AgregarDoctorComponent } from '../components/agregar-doctor/agregar-doctor.component';

export const routes: Routes = [
     {path: 'listar', component: ListarDoctoresComponent},
    {path: 'agregar', component: AgregarDoctorComponent},
    {path: '', redirectTo: '/listar', pathMatch: 'full'},
    {path: '**', redirectTo: '/listar'}
];
