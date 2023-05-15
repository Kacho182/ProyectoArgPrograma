import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './componentes/acerda-de/edit-acerca-de.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditHabComponent } from './componentes/habilidades/edit-hab.component';
import { NewHabComponent } from './componentes/habilidades/new-hab.component';
import { LoginComponent } from './componentes/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto.component';
import { NewProyectoComponent } from './componentes/proyectos/new-proyecto.component';
/*import { GuardGuard } from './servicios/guard.guard';*/

const routes: Routes = [
  {path: 'portfolio', component: PortfolioComponent, },  //canActivate:[GuardGuard]
  {path: 'login', component:LoginComponent},
  {path: '', redirectTo: 'portfolio', pathMatch: 'full'},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editExperiencia/:id', component: EditExperienciaComponent},
  {path: 'neweducacion', component: NewEducacionComponent},
  {path:'editEducacion/:id', component: EditEducacionComponent},
  {path:'newHab', component: NewHabComponent},
  {path:'editHab/:id', component: EditHabComponent},
  {path:'newProy', component: NewProyectoComponent},
  {path:'editProy/:id', component: EditProyectoComponent},
  {path: 'editAD/:id', component: EditAcercaDeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
