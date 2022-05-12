import { Injectable } from '@angular/core';
import 'rxjs';
import { HttpClient } from "@angular/common/http";


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

let allTrainersPacks: Array <Trainer> = [];


@Injectable({
    providedIn: "root"
})

export class TrainerService {

  constructor( private http: HttpClient ) {}

  // Recupera el listado de clientes
  public getClients (  ) {
    const client1 = {
        name: 'q',
        relevance: 3.4
    }
    const client2 = {
    name: 'w',
    relevance: 8.4
    }
    const client3 = {
    name: 'e',
    relevance: 4
    }
    const client4 = {
    name: 'r',
    relevance: 4.8
    }
    const client5 = {
    name: 't',
    relevance: 10
    }

    const clients = [ client1, client2, client3, client4, client5];
    return clients;
  }

    // Realiza las asignaciones entre entrenadores y clientes
  public createAssignments ( trainers: any ) {
    let allClients = this.getClients();
    let allTrainer = trainers;
  
    allClients.sort((a, b) => {
        return b.relevance - a.relevance;
    });

    allTrainer.sort((a: any, b: any) => {
        return b.reputation - a.reputation;
    });

    let trainerIndex = 0;

    for (let i = 0; i < allClients.length; i++) {
        if ( allTrainer[trainerIndex].pupils.length === allTrainer[trainerIndex].maxStudentNumber && (trainerIndex + 1) < allTrainer.length) {
            trainerIndex++;
        }
        if ( allTrainer[trainerIndex].pupils.length < allTrainer[trainerIndex].maxStudentNumber) {
            allTrainer[trainerIndex].pupils.push(allClients[i])
        }
    }
    allTrainersPacks = allTrainer;
  }

  // recupera el listado de asignaciones
  public getTrainersAssignments () {
    return allTrainersPacks;    
  }

 
}