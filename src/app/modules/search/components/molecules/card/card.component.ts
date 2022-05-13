import { Component, Input, OnInit } from '@angular/core';
import { User } from '@core/interfaces/models/User';
import { environment } from 'environments/environment';

@Component({
  selector: 'molecule-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  viewTexts = {
    visitProfile: 'Visit profile',
  }


  @Input() data!: User;

  constructor() { }

  ngOnInit(): void {
  }

  goToProfile() {
    window.open(environment.githubUrl + this.data.login, "_blank");
  }

}
