import { Routes } from '@angular/router';
import { ListarDoctoresComponent } from '../components/listar-doctores/listar-doctores.component';
import { AgregarDoctorComponent } from '../components/agregar-doctor/agregar-doctor.component';
import { ConsultaComponent } from '../components/consulta/consulta/consulta.component';
import { EliminarComponent } from '../components/eliminar/eliminar.component';
import { ActualizarComponent } from '../components/actualizar/actualizar.component';
import { EditarComponent } from '../components/editar/editar.component';

export const routes: Routes = [
     {path: 'listar', component: ListarDoctoresComponent},
    {path: 'agregar', component: AgregarDoctorComponent},
    {path: 'consulta/:id', component: ConsultaComponent},
    {path: 'eliminar', component: EliminarComponent},
    {path: 'actualizar', component: ActualizarComponent},
    {path: 'editar/:id', component: EditarComponent},
    {path: '', redirectTo: '/listar', pathMatch: 'full'},
    {path: '**', redirectTo: '/listar'}
];
