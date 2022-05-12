import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TrainersComponent } from './trainers/trainers.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AssessmentsComponent }from './assessments/assessments.component'
import { ReactiveFormsModule } from '@angular/forms';
import { TrainerService } from './services/trainer.service';
import {NavbarComponent} from './navbar/navbar.component';


@NgModule({
declarations: [
AppComponent,
TrainersComponent,
AssignmentsComponent,
AssessmentsComponent,
NavbarComponent
],
imports: [
BrowserModule,
AppRoutingModule,
HttpClientModule,
ReactiveFormsModule,
],
providers: [TrainerService],
bootstrap: [AppComponent]
})
export class AppModule { }