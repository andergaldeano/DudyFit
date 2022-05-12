import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  trainerTabId = 'trainerTab';
  assessmentTabId = 'assessmentTab';
  showingArea = JSON.parse(JSON.stringify(this.trainerTabId));

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  changeShowingArea( idActive: string ) {
    let active = document.getElementById(idActive);
    let defuse = document.getElementById(this.showingArea);
  
    active?.classList.add('active');
    defuse?.classList.remove('active');

    this.showingArea = idActive;
  }
}
