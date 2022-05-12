import { Component, Input, OnInit } from '@angular/core';
import { User } from '@core/interfaces/models/User';

@Component({
  selector: 'molecule-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() data!: User;

  constructor() { }

  ngOnInit(): void {
  }

}
