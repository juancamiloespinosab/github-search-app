import { Component, OnInit } from '@angular/core';
import { User } from '@core/interfaces/models/User';
import { SharingService } from '@core/services/app/sharing.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'organism-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(
    public sharingService: SharingService
  ) {
    this.users$ = sharingService.searchingObservable;
  }

  ngOnInit(): void {
  }

}
