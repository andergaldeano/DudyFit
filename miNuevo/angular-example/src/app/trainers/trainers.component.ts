import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})


export class TrainersComponent implements OnInit {

  trainersList: Array <Trainer> = [];
  clientList: Array <Client> = [];

  popup: boolean = false;

  constructor(
    private trainerService: TrainerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.clientList = this.trainerService.getClients();
    this.trainersList = this.trainerService.getTrainersAssignments();
  }

  addTrainerForm = new FormGroup({
    name: new FormControl(''),
    reputation: new FormControl(''),
    maxStudentNumber: new FormControl(''),
  });

  createTrainer() {
    const newTrainer = {
      name: this.addTrainerForm.value.name,
      reputation: this.addTrainerForm.value.reputation,
      maxStudentNumber: this.addTrainerForm.value.maxStudentNumber,
      pupils: []
    }

    this.trainersList.push(newTrainer);

    this.addTrainerForm.reset();
  }

  editTrainer(index: number) {
    this.addTrainerForm.setValue({ name: this.trainersList[index].name,
      reputation: this.trainersList[index].reputation,
      maxStudentNumber: this.trainersList[index].maxStudentNumber
    });

    this.deleteTrainer(index);
  }

  deleteTrainer(index: number) {
    this.trainersList.splice(index, 1);
  }


  calculateAssignments (  ) {
    this.trainerService.createAssignments(this.trainersList );
    this.router.navigate(['assignments']);
  }
}
