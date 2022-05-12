import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TrainersComponent } from './trainers/trainers.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  { path: '', redirectTo: 'trainer', pathMatch: 'full'},
  { path: 'trainer', component: TrainersComponent },
  { path: 'assignments', component: NavbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };