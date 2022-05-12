import { Component, OnInit } from '@angular/core';
import {TrainerService} from '../services/trainer.service';
import {Router} from '@angular/router';

interface Client { 
  name: String;
  relevance: Number; 
}

interface Trainer { 
  name: String;
  reputation: Number; 
  maxStudentNumber: Number; 
  pupils: Array<Client>;
}

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  trainersList: Array <Trainer> = [];

  constructor(
    private router: Router,
    private trainerService: TrainerService
  ) { }

  ngOnInit(): void {
    this.trainersList = this.trainerService.getTrainersAssignments();

    if (!this.trainersList || this.trainersList.length < 1 ) {
      this.router.navigate(['trainer']);
    }
   
  }
}
